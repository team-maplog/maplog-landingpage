import { AppScreenshot } from "@/components/app-screenshot";
import { BrandLink } from "@/components/brand";
import { MaplogExperience } from "@/components/maplog-experience";

const apiUrl = process.env.MAPLOG_API_URL ?? "https://api-maplog.millenniumrhino.com";
const appUrl = "https://apps.apple.com/kr/app/%EB%A7%B5%EB%A1%9C%EA%B7%B8-maplog-%EC%97%AC%ED%96%89%EC%9D%98-%EC%88%9C%EA%B0%84%EC%9D%84-%EC%A7%80%EB%8F%84%EC%97%90-%EA%B8%B0%EB%A1%9D/id6811288366";

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
          <a className="nav-cta" href={appUrl} data-analytics-event="nav_open_app">앱 다운로드 <ArrowIcon /></a>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span /> TRAVEL REELS × MAP</p>
            <h1>영상 속 장면을<br /><em>지도 위의 기억으로.</em></h1>
            <p className="hero-description">Maplog는 짧은 여행 영상에 장소와 이동 경로를 함께 기록해요. 스쳐 지나간 한 장면이 다음 여행의 출발점이 됩니다.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={appUrl} data-analytics-event="hero_open_app">App Store에서 다운로드 <ArrowIcon /></a>
              <a className="button button-secondary" href="#experience" data-analytics-event="hero_preview_experience">어떻게 기록되나요?</a>
            </div>
            <p className="hero-note"><RouteIcon /> 영상 한 편에 장소와 하루의 동선을 함께</p>
          </div>

          <div className="hero-product" aria-label="Maplog 실제 앱 화면">
            <figure className="hero-phone">
              <AppScreenshot name="reel" alt="포항의 바다와 노을을 담은 Maplog 여행 릴스 화면" priority sizes="(max-width: 760px) 48vw, 290px" />
              <figcaption>순간을 담고</figcaption>
            </figure>
            <figure className="hero-map-card">
              <AppScreenshot name="explore" alt="포항과 경주 지도 위에 여행 영상과 관광 장소가 표시된 Maplog 탐색 화면" priority sizes="(max-width: 760px) 48vw, 290px" />
              <figcaption>지도에서 발견해요</figcaption>
            </figure>
          </div>
        </div>

        <div className="benefit-list" aria-label="Maplog의 핵심 기능">
          {benefits.map(({ title, description, Icon }) => <article className="benefit" key={title}><Icon /><div><h2>{title}</h2><p>{description}</p></div></article>)}
        </div>
      </section>

      <section className="story-intro" id="how-it-works">
        <p className="eyebrow eyebrow-dark"><span /> REEL TO MAP</p>
        <div className="story-heading"><h2>좋은 여행은<br /><em>좋은 장면에서 시작되니까.</em></h2><p>마음에 남는 순간을 저장하고, 그 장면이 머문 실제 장소를 확인하세요. Maplog가 여행의 영감을 다음 경로로 이어 줍니다.</p><a className="button button-primary" href={appUrl} data-analytics-event="story_open_app">앱 다운로드 <ArrowIcon /></a></div>
        <div className="story-flow" aria-label="여행을 기록하고 다시 보는 과정">
          <article className="flow-card"><AppScreenshot name="editor" alt="여행 영상에 글자와 색상을 더하는 텍스트 편집 화면" sizes="(max-width: 760px) 29vw, 190px" /><span>01</span><strong>나만의 글을 더하고</strong></article>
          <article className="flow-card"><AppScreenshot name="route" alt="방문한 장소를 번호와 경로로 연결한 지도 화면" sizes="(max-width: 760px) 29vw, 190px" /><span>02</span><strong>장소를 경로로 잇고</strong></article>
          <article className="flow-card"><AppScreenshot name="playback" alt="지도에서 선택한 장소의 여행 영상을 다시 보는 화면" sizes="(max-width: 760px) 29vw, 190px" /><span>03</span><strong>그 순간을 다시 봐요</strong></article>
        </div>
      </section>

      <MaplogExperience />

      <section className="closing" id="start">
        <div className="closing-screens" aria-hidden="true"><AppScreenshot name="home" alt="" sizes="240px" /><AppScreenshot name="explore" alt="" sizes="240px" /></div>
        <div className="closing-copy"><p className="eyebrow eyebrow-dark"><span /> MORE TRIPS, A BRIGHTER YOU</p><h2>지도를 따라,<br />더 많은 좋은 날이 기다리고 있어요.</h2><p>Maplog와 함께 여행의 다음 장면을 기록해 보세요.</p><a className="button button-ink" href={appUrl} data-analytics-event="closing_open_app">앱 다운로드 <ArrowIcon /></a></div>
      </section>

      <footer className="site-footer"><BrandLink /><p>여행 영상을 지도에 기록하세요.</p><div className="footer-links"><a href={`${apiUrl}/privacy`}>개인정보처리방침</a><a href={`${apiUrl}/terms`}>서비스 이용약관</a></div><span>© {new Date().getFullYear()} Maplog</span></footer>
    </main>
  );
}
