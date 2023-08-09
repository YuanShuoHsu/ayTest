import { Fragment } from "react";
import styles from "./index.module.scss";

interface NumberRangeOverlapProps {
  intervals: string[][];
}

export default function NumberRangeOverlap({
  intervals,
}: NumberRangeOverlapProps) {
  const findMergeIntervals = (intervals: string[][]): string[][] => {
    if (intervals.length === 0) {
      return [];
    }

    const mergedIntervals: string[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

      if (Number(currentInterval[0]) <= Number(lastMergedInterval[1])) {
        lastMergedInterval[1] = String(
          Math.max(Number(lastMergedInterval[1]), Number(currentInterval[1]))
        );
      } else {
        mergedIntervals.push(currentInterval);
      }
    }

    return mergedIntervals;
  };

  const findOverlappingIntervals = (intervals: string[][]): string[][] => {
    const sortedIntervals = [...intervals].sort(
      (a, b) => Number(a[0]) - Number(b[0])
    );

    const overlappingIntervals: string[][] = [];

    let currentInterval = sortedIntervals[0];

    for (let i = 1; i < sortedIntervals.length; i++) {
      const interval = sortedIntervals[i];

      if (Number(interval[0]) <= Number(currentInterval[1])) {
        overlappingIntervals.push([
          interval[0],
          String(Math.min(Number(currentInterval[1]), Number(interval[1]))),
        ]);
      }

      currentInterval = interval;
    }

    return overlappingIntervals;
  };

  const overlappingIntervals = findOverlappingIntervals(intervals);
  const mergedIntervals = findMergeIntervals(overlappingIntervals);

  // console.log(mergedIntervals)

  // const overlappingIndices = [];

  // for (const merged of mergedIntervals) {
  //   for (const input of intervals) {
  //     const [mergedStart, mergedEnd] = merged;
  //     const [inputStart, inputEnd] = input;

  //     if (mergedStart <= inputEnd && mergedEnd >= inputStart) {
  //       overlappingIndices.push(intervals.indexOf(input));
  //     }
  //   }
  // }

  return (
    <span className={styles.numberRangeOverlap}>
      {`[`}
      {mergedIntervals.map((interval, index) => (
        <Fragment key={index}>
          {Number(interval[0]) === Number(interval[1])
            ? `[${interval[0]}]`
            : `[${interval[0]}, ${interval[1]}]`}
          {index !== mergedIntervals.length - 1 && ", "}
        </Fragment>
      ))}
      {`]`}
    </span>
  );
}
