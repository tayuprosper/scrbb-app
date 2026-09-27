import { IoCashOutline, IoFlashOutline, IoLocationOutline, IoTimeOutline } from "react-icons/io5";

const POINTS = [
  {
    icon: <IoTimeOutline />,
    title: "Fits into your day",
    text: "Lessons take 5 to 10 minutes. Finish one in a taxi, a queue or a lunch break.",
  },
  {
    icon: <IoLocationOutline />,
    title: "Written for Cameroon",
    text: "Prices in FCFA, OHADA rules, MoMo payments and businesses like the ones on your street.",
  },
  {
    icon: <IoCashOutline />,
    title: "Pay with MoMo or Orange Money",
    text: "No bank card needed. Pro is prepaid, so you're never charged without saying yes.",
  },
  {
    icon: <IoFlashOutline />,
    title: "Skip what you already know",
    text: "Take a lesson's quiz first. Pass it and move on to something new.",
  },
];

export default function BuiltForHere() {
  return (
    <section className="sb-section">
      <div className="sb-wrap sb-here">
        <div className="sb-head">
          <h2>Built for how you actually learn.</h2>
          <p>Most online courses are made for somewhere else. Scrbb is made for here.</p>
        </div>
        <ul className="sb-here__list">
          {POINTS.map((p) => (
            <li key={p.title}>
              <span className="sb-here__icon" aria-hidden="true">
                {p.icon}
              </span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
