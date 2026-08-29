# Maplog Landing Page

Maplog의 공개 랜딩 페이지를 제공하는 Next.js 프로젝트입니다.

개인정보처리방침과 서비스 이용약관은 API가 아닌 Maplog 백엔드의 Thymeleaf SSR 템플릿이 각각 `/privacy`, `/terms`에서 직접 렌더링합니다.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

## Production deployment

이 프로젝트와 `maplog-be`는 같은 `maplog.millenniumrhino.com` 호스트를 사용합니다. 백엔드의 Traefik 규칙은 `/api`, `/actuator`, API 문서, `/privacy`, `/terms`를 처리하고, 나머지 경로는 이 프로젝트가 처리합니다.

```bash
cp .env.example .env
./deploy.sh
```

배포 전에는 `traefik_public_network`와 실행 중인 Traefik 인스턴스가 있어야 합니다. 백엔드의 `compose.deploy.yml` 변경도 함께 배포해야 각 경로가 올바른 서비스로 전달됩니다.

## Required URLs

- Landing: `https://maplog.millenniumrhino.com`
- Privacy: `https://maplog.millenniumrhino.com/privacy`
- Terms: `https://maplog.millenniumrhino.com/terms`
# maplog-landingpage
