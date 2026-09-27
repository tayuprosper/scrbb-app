import {
  IoBatteryFull,
  IoCellular,
  IoChevronForward,
  IoCompass,
  IoFlame,
  IoHome,
  IoPerson,
  IoPlay,
  IoShieldCheckmark,
  IoWifi,
} from "react-icons/io5";
import ModuleCover from "./ModuleCover";
import RoadRow from "./RoadRow";

// A drawing of the app's real Home screen, built from the same pieces
export default function PhoneMockup() {
  return (
    <div className="sb-phone" role="img" aria-label="The Scrbb app's Home screen, showing a lesson in progress and a 12-day streak">
      <div className="sb-phone__screen">
        <div className="sb-phone__status">
          <span>9:41</span>
          <span className="sb-phone__status-icons">
            <IoCellular />
            <IoWifi />
            <IoBatteryFull />
          </span>
        </div>

        {/* Top bar */}
        <div className="sb-app-top">
          <div>
            <p className="sb-app-muted">Good morning</p>
            <p className="sb-app-name">Brenda</p>
          </div>
          <span className="sb-streak">
            <IoFlame className="sb-pulse" />
            12
          </span>
          <span className="sb-app-avatar">B</span>
        </div>

        <div className="sb-app-body">
          {/* Continue card */}
          <div className="sb-app-current">
            <div className="sb-app-current__top">
              <div>
                <p className="sb-app-label">Continue · Accounting Basics</p>
                <p className="sb-app-current__title">The Cash Book: Recording Money In and Out</p>
                <p className="sb-app-current__meta">Lesson 2 of 8 · 7 min</p>
              </div>
              <span className="sb-app-play sb-pulse-soft">
                <IoPlay />
              </span>
            </div>
            <RoadRow total={8} done={1} onDark animate delay={900} />
          </div>

          {/* Essential */}
          <div className="sb-app-essential">
            <span className="sb-app-essential__icon">
              <IoShieldCheckmark />
            </span>
            <div>
              <p className="sb-app-essential__kicker">Everyone should take this · Free</p>
              <p className="sb-app-essential__title">Stay Safe Online</p>
            </div>
            <IoChevronForward className="sb-app-essential__chev" />
          </div>

          {/* Module card */}
          <div className="sb-app-module">
            <div className="sb-app-module__row">
              <div className="sb-app-module__cover">
                <ModuleCover color="#5B4BFF" icon="sparkles" height={56} radius={12} />
              </div>
              <div>
                <p className="sb-app-module__title">
                  AI for Business <span className="sb-pro">Pro</span>
                </p>
                <p className="sb-app-muted">3 of 10 lessons · 30%</p>
              </div>
            </div>
            <RoadRow total={10} done={3} />
            <span className="sb-app-btn">Continue</span>
          </div>
        </div>

        <div className="sb-app-tabs">
          <span className="is-active">
            <IoHome />
            Home
          </span>
          <span>
            <IoCompass />
            Explore
          </span>
          <span>
            <IoPerson />
            Profile
          </span>
        </div>
      </div>
    </div>
  );
}
