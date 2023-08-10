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
    const upperLimit = 20;

    for (const [startStr, endStr] of sortedIntervals) {
      const start = Number(startStr);
      const end = Number(endStr);

      if (start > currentMax + 1) {
        missingIntervals.push([String(currentMax + 1), String(start - 1)]);
      }

      currentMax = Math.max(currentMax, end);
    }

    if (currentMax < upperLimit) {
      missingIntervals.push([String(currentMax + 1), String(upperLimit)]);
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
