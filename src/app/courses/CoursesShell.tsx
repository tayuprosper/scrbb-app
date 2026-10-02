// Pieces shared by /courses and /courses/<slug>. Self-contained: no other site files needed.
import Link from "next/link";
import type { ReactNode } from "react";
import type { Course } from "../../lib/courseSeo";
import s from "./courses.module.css";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className={s.page}>
      <header className={s.topbar}>
        <div className={`${s.wrap} ${s.topbarInner}`}>
          <Link href="/" className={s.brand}>
            Scrbb
          </Link>
          <nav className={s.topLinks} aria-label="Main">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className={s.footer}>
        <div className={s.wrap}>
          © {new Date().getFullYear()} Scrbb · Learn practical skills in Cameroon ·{" "}
          <a href="mailto:hello@scrbb-app.site">hello@scrbb-app.site</a>
        </div>
      </footer>
    </div>
  );
}

export function PlanTag({ plan }: { plan: Course["plan"] }) {
  return plan === "pro" ? (
    <span className={`${s.tag} ${s.pro}`}>Pro</span>
  ) : (
    <span className={`${s.tag} ${s.free}`}>Free</span>
  );
}

export function CourseCard({ c, headingLevel = 3 }: { c: Course; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const count = c.lessons?.length;
  return (
    <li>
      <Link href={`/courses/${c.slug}`} className={`${s.card} ${s.courseCard}`}>
        <div className={s.cardCover} style={{ background: c.color }} aria-hidden="true">
          {c.title}
        </div>
        <div className={s.cardBody}>
          <div className={s.chips}>
            <PlanTag plan={c.plan} />
            {c.comingSoon ? <span className={s.chip}>Coming soon</span> : null}
            {count ? <span className={s.chip}>{count} lessons</span> : null}
          </div>
          <Heading className={s.cardTitle}>{c.title}</Heading>
          <p className={s.cardBlurb}>{c.blurb}</p>
          <span className={s.cardMore}>See the course →</span>
        </div>
      </Link>
    </li>
  );
}
