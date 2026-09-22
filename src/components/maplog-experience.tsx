"use client";

import { useState } from "react";
import { AppScreenshot } from "@/components/app-screenshot";

const previews = [
  {
    id: "discover", label: "여행 발견", title: "다음 여행의 시작을 찾아요.",
    description: "홈에서 여행 영상과 즐길 거리를 만나고, 지도에서 주변 장소를 한눈에 살펴보세요.",
    screens: [
      { name: "home", alt: "추천 행사와 여행 영상이 함께 보이는 Maplog 홈 화면", caption: "여행의 영감을 만나는 홈" },
      { name: "explore", alt: "여행 영상과 관광지를 지도 위에서 찾는 탐색 화면", caption: "주변을 한눈에 보는 지도" },
    ],
  },
  {
    id: "events", label: "즐길 거리", title: "가고 싶은 곳을 더 자세히.",
    description: "관광과 행사 목록에서 새로운 즐길 거리를 찾고, 상세 화면에서 일정과 위치를 확인해요.",
    screens: [
      { name: "events", alt: "여러 지역의 행사와 축제가 나열된 관광 목록 화면", caption: "새로운 즐길 거리 찾기" },
      { name: "event-detail", alt: "행사의 일정, 주소, 지도 보기와 길찾기가 있는 상세 화면", caption: "일정부터 길찾기까지" },
    ],
  },
  {
    id: "memories", label: "순간 나누기", title: "좋았던 순간을 함께 나눠요.",
    description: "지도에서 여행 영상을 다시 보고, 댓글로 그 순간에 대한 이야기를 나눠 보세요.",
    screens: [
      { name: "playback", alt: "지도 위에서 여행 영상을 재생하는 Maplog 화면", caption: "장소에서 다시 만나는 순간" },
      { name: "comments", alt: "여행 영상 아래에서 댓글을 읽고 작성하는 화면", caption: "댓글로 이어지는 이야기" },
    ],
  },
] as const;

export function MaplogExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const preview = previews[activeIndex];

  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading">
        <p className="eyebrow"><span /> 여행 미리보기</p>
        <h2 id="experience-title">보는 순간,<br /><em>지도의 한 점이 돼요.</em></h2>
        <p>Maplog에서는 어떤 여행이 기다릴까요? 아래 기능을 선택해 실제 앱 화면을 둘러보세요.</p>
      </div>
      <div className="experience-tabs" role="group" aria-label="미리 볼 앱 기능">
        {previews.map((item, index) => (
          <button key={item.id} className={`experience-tab${activeIndex === index ? " is-active" : ""}`} type="button" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-controls="experience-panel">
            <span>0{index + 1}</span><strong>{item.label}</strong><span aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <div className="experience-stage" id="experience-panel">
        <div className="experience-copy" aria-live="polite" aria-atomic="true">
          <span className="preview-label">{preview.label}</span>
          <h3>{preview.title}</h3><p>{preview.description}</p>
          <small>실제 앱 캡처 · 화면 속 콘텐츠는 촬영 시점 기준입니다.</small>
        </div>
        <div className="experience-screens">
          {preview.screens.map((screen) => (
            <figure key={screen.name}>
              <AppScreenshot name={screen.name} alt={screen.alt} sizes="(max-width: 760px) 40vw, 260px" />
              <figcaption>{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
