import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { COURSES, LIVE_COURSES, SITE_URL } from "../../lib/courseSeo";
import { CourseCard, Shell } from "./CoursesShell";
import s from "./courses.module.css";

export const metadata: Metadata = {
  title: { absolute: "Online Courses to Learn Practical Skills in Cameroon | Scrbb" },
  description:
    "Free and Pro courses on your phone: cyber security, AI for business, accounting, building websites, content creation and online safety. Made for Cameroon.",
  alternates: { canonical: `${SITE_URL}/courses` },
};

// scrbb-app.site/courses
export default function CoursesPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: LIVE_COURSES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/courses/${c.slug}`,
      name: c.title,
    })),
  };

  return (
    <Shell>
      <JsonLd data={list} />
      <section className={s.hero}>
        <div className={s.wrap}>
          <p className={s.eyebrow}>Courses</p>
          <h1 className={s.h1}>Learn practical skills in Cameroon, on your phone.</h1>
          <p className={s.lead}>
            Short lessons with a quiz after each one, written for life and work in Cameroon. Free courses are free
            in full, and every Pro course lets you try the first 3 lessons for free.
          </p>
          <ul className={s.grid}>
            {COURSES.map((c) => (
              <CourseCard key={c.slug} c={c} headingLevel={2} />
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
