import type { MetadataRoute } from "next";

// Served at /robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.scrbb-app.site/sitemap.xml",
  };
}
