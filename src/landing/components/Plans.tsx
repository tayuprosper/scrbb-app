import { IoCheckmark, IoRibbon, IoSparkles } from "react-icons/io5";
import { DOWNLOAD } from "../site";
import GameButton from "./GameButton";

const FREE = [
  "Every free course, in full",
  "The first 3 lessons of every Pro course",
  "Quizzes, streaks and progress tracking",
];

const PRO = [
  "Everything in Free",
  "Every lesson of every Pro course",
  "Certificates when you finish a course",
  "New Pro courses as they're released",
];

export default function Plans() {
  return (
    <section className="sb-section" id="pricing">
      <div className="sb-wrap">
        <div className="sb-head sb-head--center">
          <h2>Start free. Go Pro when you're ready.</h2>
          <p>
            Pay monthly, every 3 months or yearly with MTN Mobile Money or Orange Money. Pro doesn't renew by
            itself, so you stay in control.
          </p>
        </div>

        <div className="sb-plans">
          <article className="sb-plan">
            <div className="sb-plan__top">
              <span className="sb-plan__icon sb-plan__icon--free">
                <IoSparkles />
              </span>
              <div>
                <p className="sb-plan__kicker">Your plan</p>
                <h3>Free</h3>
              </div>
            </div>
            <ul>
              {FREE.map((f) => (
                <li key={f}>
                  <IoCheckmark />
                  {f}
                </li>
              ))}
            </ul>
            <GameButton href={DOWNLOAD.apkUrl} download variant="outline" block>
              Download free
            </GameButton>
          </article>

          <article className="sb-plan sb-plan--pro">
            <div className="sb-plan__top">
              <span className="sb-plan__icon sb-plan__icon--pro">
                <IoRibbon />
              </span>
              <div>
                <p className="sb-plan__kicker">Your plan</p>
                <h3>Scrbb Pro</h3>
              </div>
            </div>
            <ul>
              {PRO.map((f) => (
                <li key={f}>
                  <IoCheckmark />
                  {f}
                </li>
              ))}
            </ul>
            <GameButton href={DOWNLOAD.apkUrl} download block>
              Get the app, then upgrade
            </GameButton>
            <p className="sb-plan__fine">See current prices on the Plans screen in the app.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
