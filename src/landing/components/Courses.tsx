import { COURSES } from "../site";
import ModuleCover from "./ModuleCover";

export default function Courses() {
  return (
    <section className="sb-section sb-section--tint" id="courses">
      <div className="sb-wrap">
        <div className="sb-head">
          <h2>Start with these courses.</h2>
          <p>New courses are added regularly, and every one has free lessons you can try first.</p>
        </div>

        <ul className="sb-courses">
          {COURSES.map((c) => (
            <li key={c.title} className={`sb-course${c.comingSoon ? " is-soon" : ""}`}>
              <div className="sb-course__cover">
                <ModuleCover color={c.color} icon={c.icon} imageUrl={c.imageUrl} height={150} />
                {c.comingSoon && <span className="sb-course__soon">Coming soon</span>}
              </div>
              <div className="sb-course__body">
                <div className="sb-course__title">
                  <h3>{c.title}</h3>
                  <span className={c.plan === "pro" ? "sb-pro" : "sb-free"}>{c.plan === "pro" ? "Pro" : "Free"}</span>
                </div>
                <p>{c.blurb}</p>
                <p className="sb-course__meta">
                  {c.lessons ? `${c.lessons} lessons` : "Short lessons"}
                  {c.plan === "pro" ? " · first 3 free" : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
