import { IoBulb, IoCheckmarkCircle } from "react-icons/io5";

// A real lesson from Accounting Basics, shown the way the app shows it
export default function LessonAnatomy() {
  return (
    <section className="sb-section sb-section--tint">
      <div className="sb-wrap">
        <div className="sb-head">
          <h2>Every lesson follows the same simple recipe.</h2>
          <p>
            No long videos, no textbooks. This is the first lesson of Accounting Basics, exactly as it looks in
            the app.
          </p>
        </div>

        <div className="sb-anatomy">
          <div className="sb-anatomy__row">
            <p className="sb-anatomy__note">
              <strong>The hook.</strong> One line that tells you why this lesson matters.
            </p>
            <div className="sb-block sb-block--hook">
              If you don't know your numbers, you don't know your business.
            </div>
          </div>

          <div className="sb-anatomy__row">
            <p className="sb-anatomy__note">
              <strong>The idea.</strong> Plain words, short paragraphs, no jargon.
            </p>
            <div className="sb-block sb-block--content">
              <h4>What accounting really is</h4>
              <p>
                Accounting is simply keeping a clear record of the money that comes into your business and the
                money that goes out, then using those records to understand what is happening. If you can add
                and subtract, you can do it.
              </p>
            </div>
          </div>

          <div className="sb-anatomy__row">
            <p className="sb-anatomy__note">
              <strong>A real example.</strong> Local businesses, prices in FCFA, situations you'll recognise.
            </p>
            <div className="sb-block sb-block--example">
              <span className="sb-block__kicker">
                <span className="sb-block__bulb">
                  <IoBulb />
                </span>
                Real example
              </span>
              <p>
                Aunty Grace runs a provision store in Bamenda. When she started writing down every sale and
                expense, she found she was keeping only about 35,000 FCFA a month, and soft drinks were earning
                her almost nothing.
              </p>
            </div>
          </div>

          <div className="sb-anatomy__row">
            <p className="sb-anatomy__note">
              <strong>Remember this.</strong> The key points, so you can review in seconds.
            </p>
            <div className="sb-block sb-block--points">
              <span className="sb-block__kicker">Remember this</span>
              <ul>
                <li>
                  <IoCheckmarkCircle />A full cash drawer does not mean you are making a profit.
                </li>
                <li>
                  <IoCheckmarkCircle />A notebook is enough to start. Consistency matters more than tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
