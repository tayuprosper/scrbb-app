import type { MetadataRoute } from "next";

// Served at /sitemap.xml. Add new pages here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.scrbb-app.site/", changeFrequency: "weekly", priority: 1 },
    { url: "https://www.scrbb-app.site/feedback", changeFrequency: "yearly", priority: 0.3 },
  ];
}
