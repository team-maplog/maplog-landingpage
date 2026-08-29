import type { MetadataRoute } from "next";

const siteUrl = process.env.MAPLOG_SITE_URL ?? "https://maplog.millenniumrhino.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
