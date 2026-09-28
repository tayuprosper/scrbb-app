import type { ReactNode } from "react";
import { IoLogoAndroid, IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import { DOWNLOAD } from "@/lib/site";
import GameButton from "./GameButton";
import RoadRow from "./RoadRow";

const STEPS = [
  "Tap Download for Android.",
  "Open the file when the download finishes.",
  "If Android asks, allow installing from your browser.",
  "Tap Install, open Scrbb and create your account.",
];

function StoreBadge({ href, icon, store }: { href: string | null; icon: ReactNode; store: string }) {
  const inner = (
    <>
      {icon}
      <span>
        <small>{href ? "Get it on" : "Coming soon"}</small>
        {store}
      </span>
    </>
  );
  return href ? (
    <a className="sb-store" href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <span className="sb-store is-soon" aria-disabled="true">
      {inner}
    </span>
  );
}

export default function Download() {
  return (
    <section className="sb-section" id="download">
      <div className="sb-wrap">
        <div className="sb-download">
          <div className="sb-download__main">
            <h2>Your first lesson is five minutes away.</h2>
            <p>Download Scrbb for Android and start with any free course today.</p>
            <GameButton href={DOWNLOAD.apkUrl} download variant="white" size="lg" icon={<IoLogoAndroid />}>
              Download for Android
            </GameButton>
            <p className="sb-download__version">Version {DOWNLOAD.version} · APK file</p>
            <RoadRow total={6} done={0} onDark />
          </div>

          <div className="sb-download__side">
            <h3>Installing takes a minute</h3>
            <ol>
              {STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <div className="sb-stores">
              <StoreBadge href={DOWNLOAD.playStoreUrl} icon={<IoLogoGooglePlaystore />} store="Google Play" />
              <StoreBadge href={DOWNLOAD.appStoreUrl} icon={<IoLogoApple />} store="App Store" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
