import { IoCheckmarkCircle, IoLogoAndroid } from "react-icons/io5";
import { DOWNLOAD } from "../site";
import GameButton from "./GameButton";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="sb-hero" id="top">
      <div className="sb-wrap sb-hero__inner">
        <div className="sb-hero__copy">
          <h1 className="sb-hero__title">Learn skills that pay, five minutes at a time.</h1>
          <p className="sb-hero__lead">
            Short, practical lessons on money, AI, business, careers and staying safe online, written for
            Cameroon. Read a lesson, pass the quiz, keep your streak going.
          </p>

          <div className="sb-hero__actions">
            <GameButton href={DOWNLOAD.apkUrl} download size="lg" icon={<IoLogoAndroid />}>
              Download for Android
            </GameButton>
            <a className="sb-link" href="#how">
              See how it works
            </a>
          </div>

          <p className="sb-hero__note">
            Free to download. Android only for now, iPhone later.
          </p>
        </div>

        <div className="sb-hero__visual">
          <div className="sb-hero__halo" aria-hidden="true" />
          <PhoneMockup />
          <div className="sb-toast" aria-hidden="true">
            <IoCheckmarkCircle />
            <div>
              <strong>Quiz passed</strong>
              <span>5 of 5 correct</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
