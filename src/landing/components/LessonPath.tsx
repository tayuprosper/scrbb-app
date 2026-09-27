import type { ReactNode } from "react";
import { IoCheckmark, IoFlame, IoLogoAndroid, IoRibbon } from "react-icons/io5";
import { DOWNLOAD } from "../site";
import { useInView } from "../hooks/useInView";
import GameButton from "./GameButton";

type Stop = { title: string; text: string; visual: ReactNode };

const STOPS: Stop[] = [
  {
    title: "Tell us who you are",
    text: "Student, teacher, business owner or job seeker. Answer a few quick questions and Scrbb picks where you should start.",
    visual: (
      <div className="sb-mini-chips">
        {["Student", "Teacher", "Business owner", "Recent graduate"].map((c) => (
          <span key={c} className={c === "Business owner" ? "is-picked" : undefined}>
            {c}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Read a five-minute lesson",
    text: "One idea per lesson, in plain English, with real examples from businesses in Douala, Yaoundé and Bamenda.",
    visual: (
      <div className="sb-mini-hook">
        <p>If you don't know your numbers, you don't know your business.</p>
        <span>6 min read</span>
      </div>
    ),
  },
  {
    title: "Pass the quiz",
    text: "Five quick questions lock in what you learned. Already know the topic? Take the quiz straight away and skip ahead.",
    visual: (
      <div className="sb-mini-quiz">
        <span>Assets and expenses increase with a…</span>
        <span className="is-right">
          Debit <IoCheckmark />
        </span>
        <span>Credit</span>
      </div>
    ),
  },
  {
    title: "Keep going, get certified",
    text: "Come back each day to grow your streak. Finish a course and earn a certificate you can show employers and clients.",
    visual: (
      <div className="sb-mini-streak">
        <span className="sb-streak sb-streak--lg">
          <IoFlame />
          12 days
        </span>
        <span className="sb-mini-cert">
          <IoRibbon />
          Certificate earned
        </span>
      </div>
    ),
  },
];

function PathStop({ stop, index }: { stop: Stop; index: number }) {
  // "Completes" the stop as it scrolls past the middle of the screen
  const [ref, done] = useInView<HTMLLIElement>("0px 0px -45% 0px");
  const side = index % 2 === 0 ? "left" : "right";

  return (
    <li ref={ref} className={`sb-stop sb-stop--${side}${done ? " is-done" : ""}`}>
      <div className="sb-stop__rail" aria-hidden="true">
        <span className="sb-stop__node">
          <IoCheckmark />
        </span>
        <span className="sb-stop__seg" />
      </div>
      <div className="sb-stop__card">
        <h3>{stop.title}</h3>
        <p>{stop.text}</p>
        <div className="sb-stop__visual">{stop.visual}</div>
      </div>
    </li>
  );
}

export default function LessonPath() {
  return (
    <section className="sb-section" id="how">
      <div className="sb-wrap">
        <div className="sb-head sb-head--center">
          <h2>One lesson a day. That's the whole plan.</h2>
          <p>Scrbb works like the path you follow in the app. Scroll down and watch it fill in.</p>
        </div>

        <ol className="sb-path">
          {STOPS.map((s, i) => (
            <PathStop key={s.title} stop={s} index={i} />
          ))}

          {/* The last stop is where you are now */}
          <li className={`sb-stop sb-stop--${STOPS.length % 2 === 0 ? "left" : "right"} sb-stop--current`}>
            <div className="sb-stop__rail" aria-hidden="true">
              <span className="sb-stop__node">
                <i />
              </span>
            </div>
            <div className="sb-stop__card sb-stop__card--cta">
              <h3>Start your path</h3>
              <p>Get the app and read your first lesson today. It's free.</p>
              <GameButton href={DOWNLOAD.apkUrl} download icon={<IoLogoAndroid />}>
                Download for Android
              </GameButton>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
