import { BrandLink } from "@/components/brand";
import { MaplogExperience } from "@/components/maplog-experience";

const apiUrl = process.env.MAPLOG_API_URL ?? "https://api-maplog.millenniumrhino.com";
const appUrl = process.env.NEXT_PUBLIC_MAPLOG_APP_URL ?? "https://maplog.app";

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function PlayIcon() {
  return <svg aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="m6.4 4.6 6.8 4.4-6.8 4.4V4.6Z" fill="currentColor" /></svg>;
}

function PinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M19 10.4c0 5-7 10.1-7 10.1s-7-5.1-7-10.1a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="10.3" r="2.25" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

function RouteIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" /><path d="M7.8 16.3c2.9-2.2 1.6-5.7 4.5-7.8 1.3-.9 2.4-.7 3.4-.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}

const journeySteps = [
  ["01", "여행 영상을 봐요", "짧은 릴스 속 한 장면에서 다음 여행의 이유를 발견해요."],
  ["02", "장소를 바로 확인해요", "화면에 연결된 장소를 누르면 지도 위 위치와 기록을 이어서 볼 수 있어요."],
  ["03", "하루의 경로를 따라가요", "저장한 장면이 어떤 순서로 이어졌는지 한 번에 이해해요."],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="site-nav" aria-label="주 메뉴">
          <BrandLink />
          <div className="nav-links"><a href="#how-it-works">이용 방법</a><a href="#experience">여행 미리보기</a></div>
          <a className="nav-cta" href={appUrl} data-analytics-event="nav_open_app">앱 열기 <ArrowIcon /></a>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span /> 여행 릴스와 지도를 함께</p>
            <h1>한 편의 여행을<br /><em>장소와 경로까지</em><br />기억하세요.</h1>
            <p className="hero-description">Maplog는 짧은 여행 영상을 실제 장소와 이동 경로에 연결합니다. 스쳐 지나간 장면이 다음 여행의 지도 한 조각이 됩니다.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={appUrl} data-analytics-event="hero_open_app">앱에서 여행 시작하기 <ArrowIcon /></a>
              <a className="button button-text" href="#experience" data-analytics-event="hero_preview_experience">여행 영상 둘러보기 <span>01:00</span></a>
            </div>
            <p className="hero-note"><RouteIcon /> 영상 한 편에 장소와 하루의 동선을 함께</p>
          </div>

          <div className="hero-product" aria-label="Maplog 여행 영상과 지도 미리보기" role="img">
            <div className="hero-reel">
              <div className="reel-progress" aria-hidden="true"><i /><i /><i /></div>
              <div className="reel-sky" /><div className="reel-sun" /><div className="reel-hill reel-hill-back" /><div className="reel-hill reel-hill-front" /><div className="reel-water" />
              <div className="reel-copy"><span>제주 · 오전 7:12</span><strong>바다보다 먼저<br />깨어난 아침</strong></div>
              <div className="reel-place"><PinIcon /><span>성산일출봉</span></div><div className="reel-play"><PlayIcon /></div>
            </div>
            <div className="hero-map-card">
              <div className="hero-map-grid" />
              <svg className="hero-route" viewBox="0 0 420 260" fill="none" aria-hidden="true"><path d="M44 207C96 176 87 110 151 121c59 10 59 76 122 45 37-18 31-89 103-111" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
              <span className="hero-map-pin hero-map-pin-one" /><span className="hero-map-pin hero-map-pin-two" /><span className="hero-map-pin hero-map-pin-three" />
              <div className="map-stat"><span>3개의 장소</span><strong>11.8 km</strong></div><p>하루의 여행 경로</p>
            </div>
            <div className="hero-float-note">영상에서 찾은<br /><strong>3개의 장소</strong></div>
          </div>
        </div>
        <a className="scroll-cue" href="#how-it-works" aria-label="Maplog 이용 방법으로 이동"><span>아래로 내려 이용 방법 보기</span><i /></a>
      </section>

      <section className="story-intro" id="how-it-works">
        <div className="section-heading"><p className="eyebrow eyebrow-dark"><span /> MAPLOG를 쓰는 이유</p><h2>영상이 끝나도<br />여행은 <em>계속되니까.</em></h2></div>
        <p className="section-lead">다른 여행자의 장면을 보며 마음에 남은 곳을 찾고, 어디인지 확인하고, 그날의 발걸음까지 따라가 보세요. Maplog는 영상과 지도 사이에 있던 빈칸을 채웁니다.</p>
        <div className="journey-steps">
          {journeySteps.map(([number, title, description]) => <article className="journey-step" key={number}><span className="step-number">{number}</span><div className="step-visual" aria-hidden="true"><i /><i /><i /></div><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <MaplogExperience />

      <section className="record-section">
        <div className="record-visual" aria-hidden="true"><div className="record-stamp stamp-one">여행 중의<br />한 장면</div><div className="record-card record-card-back"><span>09:40</span><i /></div><div className="record-card record-card-front"><span>14:20</span><i /></div><div className="record-route"><RouteIcon /></div></div>
        <div className="record-copy"><p className="eyebrow eyebrow-dark"><span /> 나만의 경로를 남겨요</p><h2>좋았던 순간을<br /><em>나만의 경로로.</em></h2><p>여행 후에는 짧은 영상과 장소를 엮어 한 편의 기록을 만들 수 있어요. 시간이 지나도 그날의 분위기와 발걸음을 함께 꺼내 보세요.</p><a className="text-cta" href={appUrl} data-analytics-event="record_open_app">내 여행 기록하기 <ArrowIcon /></a></div>
      </section>

      <section className="closing" id="start">
        <div className="closing-copy"><p className="eyebrow"><span /> 다음 여행의 시작</p><h2>다음에 머문 곳을<br /><em>지도로 남겨보세요.</em></h2><p>가볍게 보고, 정확히 찾고, 오래 기억하는 여행을 시작해요.</p><a className="button button-light" href={appUrl} data-analytics-event="closing_open_app">Maplog 앱 열기 <ArrowIcon /></a></div>
        <div className="closing-route" aria-hidden="true"><svg viewBox="0 0 360 300" fill="none"><path d="M22 269C140 268 56 140 165 138c72-1 69 104 137 75 43-18 13-102 45-176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg><span className="closing-pin closing-pin-one" /><span className="closing-pin closing-pin-two" /><span className="closing-pin closing-pin-three" /></div>
      </section>

      <footer className="site-footer"><BrandLink /><p>여행 영상을 지도에 기록하세요.</p><div className="footer-links"><a href={`${apiUrl}/privacy`}>개인정보처리방침</a><a href={`${apiUrl}/terms`}>서비스 이용약관</a></div><span>© {new Date().getFullYear()} Maplog</span></footer>
    </main>
  );
}
