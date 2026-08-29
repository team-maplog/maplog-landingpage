import Link from "next/link";
import { BrandLink, MaplogMark } from "@/components/brand";

const notes = [
  ["01", "한 장면", "지금 이곳에서 눈에 들어온 것을 사진과 짧은 문장으로 남깁니다."],
  ["02", "한 좌표", "주소와 지도를 함께 담아, 나중에도 그 순간을 정확히 다시 찾습니다."],
  ["03", "나의 지도", "흩어진 기록이 쌓이면, 취향과 발걸음이 보이는 개인 지도가 됩니다."],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <nav className="site-nav" aria-label="주 메뉴">
          <BrandLink />
          <a className="nav-cta" href="#start">기록 시작하기 <span aria-hidden="true">↗</span></a>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">A FIELD NOTE FOR EVERYWHERE</p>
          <h1>발걸음을<br /><em>이야기로</em> 남기다.</h1>
          <p className="hero-description">좋았던 장소, 우연히 만난 풍경, 오래 기억하고 싶은 하루를 지도 위에 차곡차곡 기록하세요.</p>
          <a className="round-cta" href="#start">Maplog 만나보기 <span aria-hidden="true">↓</span></a>
        </div>

        <div className="hero-map" aria-label="서울의 한 기록을 표현한 지도 그래픽" role="img">
          <div className="map-grid" />
          <span className="map-route route-one" />
          <span className="map-route route-two" />
          <span className="map-pin pin-one"><b /></span>
          <span className="map-pin pin-two"><b /></span>
          <span className="map-pin pin-three"><b /></span>
          <div className="map-note note-top">2026.08.30<br /><strong>성수의 늦은 오후</strong></div>
          <div className="map-note note-bottom">37°32′ N<br />127°03′ E</div>
          <p className="map-caption">YOUR CITY, IN YOUR WORDS</p>
        </div>
      </section>

      <section className="intro" id="start">
        <p className="eyebrow">THE MAP IS PERSONAL</p>
        <div className="intro-grid">
          <h2>장소는 잊혀도,<br />그날의 마음은<br /><em>남을 수 있게.</em></h2>
          <p>Maplog는 단순한 핀 모음이 아닙니다. 당신이 지나온 장소에 사진과 감정, 작은 발견을 겹쳐 올리는 가장 개인적인 지도입니다.</p>
        </div>
        <div className="feature-list">
          {notes.map(([number, title, description]) => (
            <article key={number} className="feature-card">
              <span>{number}</span>
              <MaplogMark />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">MAKE A MAP THAT FEELS LIKE YOU</p>
        <h2>오늘의 한 장소부터<br /><em>기록해 보세요.</em></h2>
        <div className="closing-orbit" aria-hidden="true"><MaplogMark /></div>
      </section>

      <footer className="site-footer">
        <BrandLink />
        <div className="footer-links">
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">서비스 이용약관</Link>
        </div>
        <span>© {new Date().getFullYear()} Maplog</span>
      </footer>
    </main>
  );
}
