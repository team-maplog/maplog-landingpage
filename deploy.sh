#!/bin/sh

set -eu

die() {
  printf '%s\n' "Error: $*" >&2
  exit 1
}

PROJECT_ROOT=$(CDPATH= cd "$(dirname "$0")" && pwd)
COMPOSE_FILE="$PROJECT_ROOT/compose.deploy.yml"
TRAEFIK_NETWORK=traefik_public_network
MAX_HEALTH_CHECKS=30
HEALTH_CHECK_INTERVAL=2

case "$#" in
  0|1) ;;
  *) die "Usage: $0 [environment-file]" ;;
esac

ENV_FILE=${1:-.env}
case "$ENV_FILE" in
  /*) ;;
  *) ENV_FILE="$PROJECT_ROOT/$ENV_FILE" ;;
esac

[ -f "$ENV_FILE" ] || die "Missing required environment file: $ENV_FILE"
command -v docker >/dev/null 2>&1 || die "Docker is not installed or is not on PATH."
docker compose version >/dev/null 2>&1 || die "Docker Compose v2 is not available."
docker network inspect "$TRAEFIK_NETWORK" >/dev/null 2>&1 || die "Required Docker network '$TRAEFIK_NETWORK' does not exist."

compose() {
  MAPLOG_WEB_ENV_FILE="$ENV_FILE" docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" "$@"
}

compose up -d --build

CONTAINER_ID=$(compose ps -q maplog-web)
[ -n "$CONTAINER_ID" ] || die "Could not find the maplog-web container after deployment."

attempt=1
while [ "$attempt" -le "$MAX_HEALTH_CHECKS" ]; do
  HEALTH_STATUS=$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}none{{end}}' "$CONTAINER_ID") || die "Could not inspect maplog-web health."

  if [ "$HEALTH_STATUS" = "healthy" ]; then
    printf '%s\n' 'maplog-web is healthy.'
    exit 0
  fi

  [ "$HEALTH_STATUS" != "unhealthy" ] || die "maplog-web container is unhealthy."
  [ "$attempt" -lt "$MAX_HEALTH_CHECKS" ] || die "Timed out waiting for maplog-web to become healthy. Last status: $HEALTH_STATUS"
  sleep "$HEALTH_CHECK_INTERVAL"
  attempt=$((attempt + 1))
done
