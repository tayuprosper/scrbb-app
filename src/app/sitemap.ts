import type { MetadataRoute } from "next";
import { LIVE_COURSES, SITE_URL } from "../lib/courseSeo";

// Served at /sitemap.xml. Course pages are added automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/courses`, changeFrequency: "weekly", priority: 0.9 },
    ...LIVE_COURSES.map((c) => ({
      url: `${SITE_URL}/courses/${c.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
