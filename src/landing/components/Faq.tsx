import { IoChevronDown } from "react-icons/io5";

const QA = [
  {
    q: "Is Scrbb free?",
    a: "Yes. The app is free to download, free courses are free in full, and you can read the first 3 lessons of every Pro course without paying. Scrbb Pro unlocks everything else.",
  },
  {
    q: "Why is it only on Android?",
    a: "Most of our learners use Android phones, so we started there. Scrbb will come to the Google Play Store and to iPhone later. This page will link to them as soon as they're live.",
  },
  {
    q: "How do I install the app from this website?",
    a: "Tap Download for Android and open the file when it finishes. Android will ask you to allow installing apps from your browser: tap Settings, switch on Allow from this source, then go back and tap Install.",
  },
  {
    q: "Android says the app could be harmful. Is it safe?",
    a: "Android shows this warning for every app installed from outside the Play Store, not just Scrbb. The app is safe as long as you download it from this website. Never install a Scrbb file someone forwards to you from elsewhere.",
  },
  {
    q: "How do I pay for Pro?",
    a: "In the app, open Plans, choose monthly, 3 months or yearly, and enter your MTN Mobile Money or Orange Money number. Approve the prompt on your phone and Pro starts straight away.",
  },
  {
    q: "What happens to my progress if my Pro plan ends?",
    a: "You keep everything you've completed, including your certificates. You just can't open new Pro lessons until you renew.",
  },
];

export default function Faq() {
  return (
    <section className="sb-section sb-section--tint" id="faq">
      <div className="sb-wrap sb-faq">
        <div className="sb-head">
          <h2>Questions people ask.</h2>
        </div>
        <div className="sb-faq__list">
          {QA.map((item) => (
            <details key={item.q} className="sb-faq__item">
              <summary>
                {item.q}
                <IoChevronDown aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
