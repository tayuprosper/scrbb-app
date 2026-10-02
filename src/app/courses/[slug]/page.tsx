import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../../components/JsonLd";
import { COURSES, DOWNLOAD_URL, LIVE_COURSES, SITE_URL, getCourse } from "../../../lib/courseSeo";
import { CourseCard, PlanTag, Shell } from "../CoursesShell";
import s from "../courses.module.css";

type Props = { params: Promise<{ slug: string }> };

// Build one page per course at deploy time
export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getCourse((await params).slug);
  if (!c) return {};
  const url = `${SITE_URL}/courses/${c.slug}`;
  return {
    title: { absolute: `${c.seoTitle} | Scrbb` },
    description: c.seoDescription,
    alternates: { canonical: url },
    openGraph: { title: c.seoTitle, description: c.seoDescription, url, type: "website", siteName: "Scrbb" },
    // Coming-soon pages stay out of Google until the course launches
    robots: c.comingSoon ? { index: false, follow: true } : undefined,
  };
}

// scrbb-app.site/courses/<slug>
export default async function CoursePage({ params }: Props) {
  const c = getCourse((await params).slug);
  if (!c) notFound();

  const count = c.lessons?.length;
  const others = LIVE_COURSES.filter((o) => o.slug !== c.slug).slice(0, 3);
  const url = `${SITE_URL}/courses/${c.slug}`;

  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.title,
    description: c.seoDescription,
    url,
    inLanguage: "en",
    educationalLevel: c.level,
    isAccessibleForFree: c.plan === "free",
    provider: { "@type": "Organization", name: "Scrbb", url: SITE_URL },
    ...(c.lessons ? { syllabusSections: c.lessons.map((name) => ({ "@type": "Syllabus", name })) } : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      ...(c.minutes ? { courseWorkload: `PT${c.minutes}M` } : {}),
    },
    offers: { "@type": "Offer", category: c.plan === "free" ? "Free" : "Partially free" },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
      { "@type": "ListItem", position: 3, name: c.title, item: url },
    ],
  };

  return (
    <Shell>
      <JsonLd data={courseData} />
      <JsonLd data={breadcrumbs} />

      {/* Intro */}
      <section className={s.hero}>
        <div className={s.wrap}>
          <nav aria-label="Breadcrumb" className={s.crumbs}>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li aria-current="page">{c.title}</li>
            </ol>
          </nav>

          <div className={s.heroGrid}>
            <div>
              <div className={s.chips}>
                <PlanTag plan={c.plan} />
                <span className={s.chip}>{c.level}</span>
                {count ? <span className={s.chip}>{count} lessons</span> : null}
                {c.minutes ? (
                  <span className={s.chip}>About {Math.round(c.minutes / 5) * 5} min in total</span>
                ) : null}
              </div>
              <p className={s.eyebrow} style={{ marginTop: 20 }}>
                {c.title}
              </p>
              <h1 className={s.h1}>{c.heading}</h1>
              {c.intro.map((p) => (
                <p key={p} className={s.lead}>
                  {p}
                </p>
              ))}

              {!c.comingSoon && (
                <div className={s.ctaRow}>
                  <a href={DOWNLOAD_URL} className={s.button}>
                    {c.plan === "free" ? "Start free in the app" : "Try 3 lessons free"}
                  </a>
                  <p className={s.note}>Free to download. Android only for now.</p>
                </div>
              )}
            </div>

            <div className={s.cover} style={{ background: c.color }} aria-hidden="true">
              {c.title}
            </div>
          </div>
        </div>
      </section>

      {/* Lessons and who it's for */}
      <section className={`${s.section} ${s.tinted}`}>
        <div className={`${s.wrap} ${s.lessonsGrid}`}>
          <div>
            <h2 className={s.h2}>{c.lessons ? "What you'll learn" : "What the course covers"}</h2>
            <ol className={s.lessonList}>
              {(c.lessons ?? c.topics ?? []).map((item, i) => (
                <li key={item} className={`${s.card} ${s.lesson}`}>
                  <span className={s.num} style={{ background: c.color }}>
                    {c.lessons ? i + 1 : "✓"}
                  </span>
                  <span>{item}</span>
                  {c.lessons && c.plan === "pro" && i < 3 && (
                    <span className={s.push}>
                      <PlanTag plan="free" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
            {c.lessons && <p className={s.note} style={{ marginTop: 16 }}>Every lesson ends with a short quiz.</p>}
          </div>

          <aside className={s.aside}>
            <div className={`${s.card} ${s.box}`}>
              <h2 className={s.boxTitle}>Who it&apos;s for</h2>
              <ul className={s.ticks}>
                {c.forWho.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
            <div className={`${s.card} ${s.box}`}>
              <h2 className={s.boxTitle}>How Scrbb works</h2>
              <ul className={s.how}>
                <li>
                  <strong>Short lessons</strong>
                  <span>Read a lesson in a few minutes, whenever you have time.</span>
                </li>
                <li>
                  <strong>A quiz after each lesson</strong>
                  <span>Check what you learned before moving on.</span>
                </li>
                <li>
                  <strong>Always on your phone</strong>
                  <span>Come back to any lesson whenever you need it.</span>
                </li>
                <li>
                  <strong>Pay with Mobile Money</strong>
                  <span>Free courses are free. Pro is paid with MTN MoMo or Orange Money.</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Course questions */}
      {c.faq.length > 0 && (
        <section className={s.section}>
          <div className={`${s.wrap} ${s.narrow}`}>
            <h2 className={s.h2}>Questions about {c.title}</h2>
            <div className={s.faq}>
              {c.faq.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other courses */}
      <section className={`${s.section} ${s.tinted}`}>
        <div className={s.wrap}>
          <div className={s.headRow}>
            <h2 className={s.h2}>More courses on Scrbb</h2>
            <Link href="/courses" className={s.link}>
              See all courses
            </Link>
          </div>
          <ul className={s.grid}>
            {others.map((o) => (
              <CourseCard key={o.slug} c={o} />
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
