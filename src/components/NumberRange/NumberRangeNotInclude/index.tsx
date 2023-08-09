import { Fragment } from "react";
import styles from "./index.module.scss";

interface NumberRangeNotIncludeProps {
  intervals: string[][];
}

export default function NumberRangeNotInclude({
  intervals,
}: NumberRangeNotIncludeProps) {
  const findMissingIntervals = (intervals: string[][]): string[][] => {
    const sortedIntervals = [...intervals].sort(
      (a, b) => Number(a[0]) - Number(b[0])
    );

    const missingIntervals: string[][] = [];

    let currentMax = -1;

    for (let interval of sortedIntervals) {
      if (Number(interval[0]) > currentMax + 1) {
        missingIntervals.push([
          String(currentMax + 1),
          String(Number(interval[0]) - 1),
        ]);
      }

      currentMax = Math.max(currentMax, Number(interval[1]));
    }
    if (currentMax < 20) {
      missingIntervals.push([String(currentMax + 1), "20"]);
    }

    return missingIntervals;
  };

  const missingIntervals = findMissingIntervals(intervals);

  return (
    <span className={styles.numberRangeNotInclude}>
      {`[`}
      {missingIntervals.map((interval, index) => (
        <Fragment key={index}>
          {Number(interval[0]) === Number(interval[1])
            ? `[${interval[0]}]`
            : `[${interval[0]}, ${interval[1]}]`}
          {index !== missingIntervals.length - 1 && ", "}
        </Fragment>
      ))}
      {`]`}
    </span>
  );
}
