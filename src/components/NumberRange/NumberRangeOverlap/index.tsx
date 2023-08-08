import { Fragment } from "react";
import styles from "./index.module.scss";

interface NumberRangeOverlapProps {
  intervals: number[][];
}

export default function NumberRangeOverlap({
  intervals,
}: NumberRangeOverlapProps) {
  const findMergeIntervals = (intervals: number[][]): number[][] => {
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
      if (currentInterval[0] <= lastMergedInterval[1]) {
        lastMergedInterval[1] = Math.max(
          lastMergedInterval[1],
          currentInterval[1]
        );
      } else {
        mergedIntervals.push(currentInterval);
      }
    }
    return mergedIntervals;
  };

  const findOverlappingIntervals = (intervals: number[][]): number[][] => {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const overlappingIntervals = [];
    let currentInterval = sortedIntervals[0];
    for (let i = 1; i < sortedIntervals.length; i++) {
      const interval = sortedIntervals[i];
      if (interval.length === 1) {
        interval.push(interval[0]);
      }
      if (interval[0] <= currentInterval[1]) {
        overlappingIntervals.push([
          interval[0],
          Math.min(currentInterval[1], interval[1]),
        ]);
      }
      currentInterval = interval;
    }
    return overlappingIntervals;
  };

  const overlappingIntervals = findOverlappingIntervals(intervals);
  const mergedIntervals = findMergeIntervals(overlappingIntervals);

  return (
    <span className={styles.numberRangeOverlap}>
      {`[`}
      {mergedIntervals.map((interval, index) => (
        <Fragment key={index}>
          {interval[0] === interval[1]
            ? `[${interval[0]}]`
            : `[${interval[0]}, ${interval[1]}]`}
          {index !== mergedIntervals.length - 1 && ", "}
        </Fragment>
      ))}
      {`]`}
    </span>
  );
}
