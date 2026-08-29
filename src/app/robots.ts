import type { MetadataRoute } from "next";

const siteUrl = process.env.MAPLOG_SITE_URL ?? "https://maplog.millenniumrhino.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
