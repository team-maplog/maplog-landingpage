import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.MAPLOG_SITE_URL ?? "https://maplog.millenniumrhino.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maplog | 여행 영상을 장소와 경로로",
    template: "%s | Maplog",
  },
  description: "짧은 여행 영상 속 장소와 이동 경로를 한눈에 발견하고, 나만의 여행을 기록하는 Maplog.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Maplog",
    title: "Maplog | 여행 영상을 장소와 경로로",
    description: "여행 영상 속 장소를 찾고, 하루의 이동 경로까지 한눈에 확인하세요.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#103a35",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
