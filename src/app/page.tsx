import { BrandLink } from "@/components/brand";
import { MaplogExperience } from "@/components/maplog-experience";

const apiUrl = process.env.MAPLOG_API_URL ?? "https://api-maplog.millenniumrhino.com";
const appUrl = process.env.NEXT_PUBLIC_MAPLOG_APP_URL ?? "https://maplog.app";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M18.6 10.1c0 4.7-6.6 9.7-6.6 9.7s-6.6-5-6.6-9.7a6.6 6.6 0 1 1 13.2 0Z" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="10.1" r="2.2" fill="currentColor" /></svg>;
}

function ReelsIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="4" y="3.5" width="16" height="17" rx="4" stroke="currentColor" strokeWidth="1.7" /><path d="m4.8 8 4-4.5M10.5 8l4-4.5M16.2 8l3.6-4.1M10.2 11.1l4.7 2.9-4.7 2.9v-5.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function RouteIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="6.3" cy="17.6" r="2.3" stroke="currentColor" strokeWidth="1.7" /><circle cx="17.7" cy="6.4" r="2.3" stroke="currentColor" strokeWidth="1.7" /><path d="M8.1 16.1c3-1.3 2.5-5.6 5.2-7.1 1.1-.6 2-.7 2.4-.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

const benefits = [
  { title: "릴스 탐색", description: "짧은 여행 로그를 보며 마음에 남는 장면을 발견해요.", Icon: ReelsIcon },
  { title: "장소 확인", description: "영상에 기록된 장소를 지도 위에서 바로 확인해요.", Icon: PinIcon },
  { title: "경로 기록", description: "저장한 순간을 이어 나만의 하루 경로를 남겨요.", Icon: RouteIcon },
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <section className="hero" id="top">
        <nav className="site-nav" aria-label="주 메뉴">
          <BrandLink />
          <div className="nav-links">
            <a href="#how-it-works">Maplog 소개</a>
            <a href="#experience">여행 미리보기</a>
          </div>
          <a className="nav-cta" href={appUrl} data-analytics-event="nav_open_app">앱 열기 <ArrowIcon /></a>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span /> TRAVEL REELS × MAP</p>
            <h1>영상 속 장면을<br /><em>지도 위의 기억으로.</em></h1>
            <p className="hero-description">Maplog는 짧은 여행 영상에 장소와 이동 경로를 함께 기록해요. 스쳐 지나간 한 장면이 다음 여행의 출발점이 됩니다.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={appUrl} data-analytics-event="hero_open_app">Maplog 시작하기 <ArrowIcon /></a>
              <a className="button button-secondary" href="#experience" data-analytics-event="hero_preview_experience">어떻게 기록되나요?</a>
            </div>
            <p className="hero-note"><RouteIcon /> 영상 한 편에 장소와 하루의 동선을 함께</p>
          </div>

          <div className="hero-product" aria-label="Maplog 영상과 지도 기록 미리보기" role="img">
            <article className="hero-phone">
              <div className="phone-island" aria-hidden="true" />
              <div className="phone-topline"><strong>추천</strong><span>팔로잉</span><span>제주도</span><span className="phone-search">⌕</span></div>
              <div className="hero-reel">
                <div className="reel-progress" aria-hidden="true"><i /><i /><i /></div>
                <div className="hero-scene" aria-hidden="true"><span /><span /><span /><span /></div>
                <div className="reel-heading"><span>제주 · 오전 7:12</span><strong>바다보다 먼저<br />깨어난 아침</strong></div>
                <div className="reel-actions" aria-hidden="true"><i>♡</i><i>◌</i><i>⌁</i></div>
                <div className="reel-location"><PinIcon /><span>성산일출봉</span><b>›</b></div>
              </div>
              <div className="phone-tabs" aria-hidden="true"><i>⌂</i><i>⌕</i><i>＋</i><i>⌖</i><i>◉</i></div>
            </article>

            <div className="hero-map-card" aria-hidden="true">
              <div className="map-grid" />
              <div className="map-water" />
              <svg className="hero-route" viewBox="0 0 410 500" fill="none"><path d="M121 402c-29-61-20-113 22-145 43-32 80 5 101-41 18-39-13-74 26-114 27-27 57-17 73-59" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
              <span className="map-dot map-dot-one" /><span className="map-dot map-dot-two" /><span className="map-dot map-dot-three" />
              <div className="map-thumb map-thumb-one" /><div className="map-thumb map-thumb-two" /><div className="map-thumb map-thumb-three" />
              <div className="map-bubble map-bubble-one">함덕해수욕장 <b>›</b></div>
              <div className="map-bubble map-bubble-two">성산일출봉 <b>›</b></div>
              <div className="map-summary"><div className="summary-thumb" /><div><span><PinIcon /> 성산일출봉</span><strong>제주의 시작을 여는<br />가장 작은 풍경</strong></div><b>›</b></div>
            </div>
          </div>
        </div>

        <div className="benefit-list" aria-label="Maplog의 핵심 기능">
          {benefits.map(({ title, description, Icon }) => <article className="benefit" key={title}><Icon /><div><h2>{title}</h2><p>{description}</p></div></article>)}
        </div>
      </section>

      <section className="story-intro" id="how-it-works">
        <p className="eyebrow eyebrow-dark"><span /> REEL TO MAP</p>
        <div className="story-heading"><h2>좋은 여행은<br /><em>좋은 장면에서 시작되니까.</em></h2><p>마음에 남는 순간을 저장하고, 그 장면이 머문 실제 장소를 확인하세요. Maplog가 여행의 영감을 다음 경로로 이어 줍니다.</p><a className="button button-primary" href={appUrl} data-analytics-event="story_open_app">앱에서 탐색하기 <ArrowIcon /></a></div>
        <div className="story-flow" aria-label="여행 로그가 지도에 기록되는 과정">
          <article className="flow-card flow-reel"><div className="flow-scene" aria-hidden="true"><span /><span /><span /></div><span>01</span><strong>마음에 드는 릴스를 발견하고</strong></article>
          <article className="flow-card flow-place"><div className="flow-place-image" aria-hidden="true" /><div className="flow-place-sheet"><b>카페 용산</b><small>제주 서귀포시 안덕면</small><div><i>♡</i><i>⌖</i><i>↗</i></div></div><span>02</span><strong>장소를 확인한 뒤</strong></article>
          <article className="flow-card flow-map"><div className="flow-map-art" aria-hidden="true"><i /><i /><i /><svg viewBox="0 0 168 203" fill="none"><path d="M30 169c16-42 3-62 36-77 31-14 39 17 58-18 12-22 4-49 27-62" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg></div><span>03</span><strong>나만의 여행 경로를 남겨요</strong></article>
        </div>
      </section>

      <MaplogExperience />

      <section className="closing" id="start">
        <div className="closing-landscape" aria-hidden="true"><span /><span /><span /></div>
        <div className="closing-copy"><p className="eyebrow eyebrow-dark"><span /> MORE TRIPS, A BRIGHTER YOU</p><h2>지도를 따라,<br />더 많은 좋은 날이 기다리고 있어요.</h2><p>Maplog와 함께 여행의 다음 장면을 기록해 보세요.</p><a className="button button-ink" href={appUrl} data-analytics-event="closing_open_app">앱 열기 <ArrowIcon /></a></div>
      </section>

      <footer className="site-footer"><BrandLink /><p>여행 영상을 지도에 기록하세요.</p><div className="footer-links"><a href={`${apiUrl}/privacy`}>개인정보처리방침</a><a href={`${apiUrl}/terms`}>서비스 이용약관</a></div><span>© {new Date().getFullYear()} Maplog</span></footer>
    </main>
  );
}
