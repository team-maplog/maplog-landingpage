"use client";

import { useState } from "react";

type JourneyStop = { id: "market" | "walk" | "roof"; time: string; place: string; category: string; caption: string; routeNote: string };

const stops: JourneyStop[] = [
  { id: "market", time: "11:08", place: "성수연방", category: "성수 · 마켓", caption: "창문으로 들어온 빛이 오래 머문 테이블.", routeNote: "첫 번째 장면 · 도보 4분" },
  { id: "walk", time: "13:26", place: "서울숲", category: "서울숲 · 공원", caption: "천천히 걷기 좋은 오후의 길.", routeNote: "두 번째 장면 · 도보 11분" },
  { id: "roof", time: "18:42", place: "뚝섬한강공원", category: "뚝섬 · 한강", caption: "해가 지기 직전, 강이 가장 넓어 보이던 순간.", routeNote: "마지막 장면 · 자전거 18분" },
];

function PlayIcon({ paused }: { paused: boolean }) {
  return paused ? <svg aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="m6.4 4.6 6.8 4.4-6.8 4.4V4.6Z" fill="currentColor" /></svg> : <svg aria-hidden="true" viewBox="0 0 18 18" fill="none"><path d="M6.5 5v8M11.5 5v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

function PinIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M19 10.4c0 5-7 10.1-7 10.1s-7-5.1-7-10.1a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="10.3" r="2.25" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

export function MaplogExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeStop = stops[activeIndex];

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading"><p className="eyebrow"><span /> 여행 미리보기</p><h2 id="experience-title">보는 순간,<br /><em>지도의 한 점이 돼요.</em></h2><p>장면이나 지도 위의 장소를 직접 선택해 보세요. 영상과 경로가 어떻게 연결되는지 미리 경험할 수 있어요.</p></div>
      <div className="experience-stage">
        <article className={`preview-reel preview-reel-${activeStop.id}${isPaused ? " is-paused" : ""}`} aria-label={`${activeStop.place} 여행 영상 미리보기`}>
          <div className="preview-progress" aria-hidden="true"><i /><i /><i /></div><div className="preview-scene" aria-hidden="true"><span /><span /><span /><span /></div><div className="preview-topline"><span>첫째 날 · 성수</span><time>{activeStop.time}</time></div><div className="preview-caption"><span>{activeStop.category}</span><strong>{activeStop.caption}</strong></div>
          <button className="preview-control" type="button" onClick={() => setIsPaused((value) => !value)} aria-pressed={!isPaused} aria-label={isPaused ? "영상 미리보기 재생" : "영상 미리보기 일시 정지"}><PlayIcon paused={isPaused} /></button><div className="preview-place"><PinIcon /><span>{activeStop.place}</span></div>
        </article>
        <div className="preview-map" aria-label="성수 하루 여행 경로">
          <div className="preview-map-grid" aria-hidden="true" /><div className="preview-map-water" aria-hidden="true" /><svg className="preview-map-route" viewBox="0 0 560 480" fill="none" aria-hidden="true"><path d="M91 117c39 47 35 142 132 144 72 1 89-91 151-42 49 39 49 112 113 123" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg><p className="map-eyebrow">서울 · 2026.08.30</p><div className="map-readout"><span>3개의 장소</span><strong>{activeStop.routeNote}</strong></div>
          {stops.map((stop, index) => <button key={stop.id} className={`route-marker route-marker-${stop.id}${activeIndex === index ? " is-active" : ""}`} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-label={`${stop.place} 장면 보기`}><span>{String(index + 1).padStart(2, "0")}</span><i /></button>)}
          <div className={`map-place-card map-place-card-${activeStop.id}`}><span>{activeStop.category}</span><strong>{activeStop.place}</strong><p>{activeStop.routeNote}</p></div>
        </div>
      </div>
      <div className="experience-tabs" aria-label="여행 장면 선택">{stops.map((stop, index) => <button key={stop.id} className={`experience-tab${activeIndex === index ? " is-active" : ""}`} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stop.place}</strong><time>{stop.time}</time></button>)}</div>
      <p className="sr-only" aria-live="polite">현재 선택된 장면: {activeStop.place}, {activeStop.routeNote}</p>
    </section>
  );
}
