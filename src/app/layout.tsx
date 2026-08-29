import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.MAPLOG_SITE_URL ?? "https://maplog.millenniumrhino.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maplog | 발걸음을 이야기로",
    template: "%s | Maplog",
  },
  description: "장소와 순간을 나만의 이야기로 기록하는 Maplog.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Maplog",
    title: "Maplog | 발걸음을 이야기로",
    description: "장소와 순간을 나만의 이야기로 기록하세요.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#173f3c",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
