import { IoCheckmark } from "react-icons/io5";

type Props = {
  total: number;
  done: number; // lessons completed; the next one is "current"
  onDark?: boolean;
  animate?: boolean; // tick the done dots one by one
  delay?: number; // ms before the first tick
};

// The row of lesson dots from the app's Home screen
export default function RoadRow({ total, done, onDark, animate, delay = 0 }: Props) {
  return (
    <div className={`sb-road${onDark ? " sb-road--dark" : ""}${animate ? " sb-road--animate" : ""}`} aria-hidden="true">
      {Array.from({ length: total }, (_, i) => {
        const isDone = i < done;
        const isCurrent = i === done;
        const last = i === total - 1;
        const style = { ["--d" as string]: `${delay + i * 180}ms` };
        return (
          <span key={i} className={`sb-road__step${last ? " sb-road__step--last" : ""}`} style={style}>
            <span className={`sb-road__dot${isDone ? " is-done" : ""}${isCurrent ? " is-current" : ""}`}>
              {isDone && <IoCheckmark />}
              {isCurrent && <i />}
            </span>
            {!last && <span className={`sb-road__line${isDone ? " is-done" : ""}`} />}
          </span>
        );
      })}
    </div>
  );
}
