import { Fragment } from "react";
import styles from "./index.module.scss";

interface NumberRangeNotIncludeProps {
  intervals: number[][];
}

export default function NumberRangeNotInclude({
  intervals,
}: NumberRangeNotIncludeProps) {
  const findMissingIntervals = (intervals: number[][]): number[][] => {
    intervals.sort((a, b) => a[0] - b[0]);

    let missingIntervals: number[][] = [];

    let currentMax = -1;

    for (let interval of intervals) {
      if (interval[0] > currentMax + 1) {
        missingIntervals.push([currentMax + 1, interval[0] - 1]);
      }

      currentMax = Math.max(currentMax, interval[1]);
    }

    if (currentMax < 20) {
      missingIntervals.push([currentMax + 1, 20]);
    }

    return missingIntervals;
  };

  const missingIntervals = findMissingIntervals(intervals);
  
  return (
    <span className={styles.numberRangeNotInclude}>
      {`[`}
      {missingIntervals.map((interval, index) => (
        <Fragment key={index}>
          {interval[0] === interval[1]
            ? `[${interval[0]}]`
            : `[${interval[0]}, ${interval[1]}]`}
          {index !== missingIntervals.length - 1 && ", "}
        </Fragment>
      ))}
      {`]`}
    </span>
  );
}
