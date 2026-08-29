# Maplog Landing Page

Maplog의 공개 랜딩 페이지를 제공하는 Next.js 프로젝트입니다.

개인정보처리방침과 서비스 이용약관은 Maplog 백엔드의 Thymeleaf SSR 템플릿이 각각 `/privacy`, `/terms`에서 직접 렌더링합니다.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

## Production deployment

공개 랜딩은 `maplog.millenniumrhino.com`, API·Swagger·약관은 `api-maplog.millenniumrhino.com`으로 분리합니다. 이 프로젝트의 푸터 약관 링크는 `MAPLOG_API_URL`을 사용하며, 백엔드 OAuth 콜백도 API 도메인을 사용해야 합니다.

```bash
cp .env.example .env
./deploy.sh
```

배포 전에는 `traefik_public_network`와 실행 중인 Traefik 인스턴스가 있어야 합니다. 백엔드의 `compose.deploy.yml` 변경도 함께 배포해야 각 경로가 올바른 서비스로 전달됩니다.

## Required URLs

- Landing: `https://maplog.millenniumrhino.com`
- API / Swagger: `https://api-maplog.millenniumrhino.com/swagger-ui/index.html`
- Privacy: `https://api-maplog.millenniumrhino.com/privacy`
- Terms: `https://api-maplog.millenniumrhino.com/terms`
# maplog-landingpage
