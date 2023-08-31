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
      const [currentStart, currentEnd] = intervals[i];
      const [lastMergedStart, lastMergedEnd] =
        mergedIntervals[mergedIntervals.length - 1];

      if (Number(currentStart) <= Number(lastMergedEnd)) {
        mergedIntervals[mergedIntervals.length - 1] = [
          lastMergedStart,
          String(Math.max(Number(lastMergedEnd), Number(currentEnd))),
        ];
      } else {
        mergedIntervals.push(intervals[i]);
      }
    }

    return mergedIntervals;
  };

  const findOverlappingIntervals = (intervals: string[][]): string[][] => {
    if (intervals.length <= 1) {
      return [];
    }

    const sortedIntervals = [...intervals].sort(
      (a, b) => Number(a[0]) - Number(b[0])
    );

    const overlappingIntervals: string[][] = [];
    let currentEnd = Number(sortedIntervals[0][1]);

    for (let i = 1; i < sortedIntervals.length; i++) {
      const [start, end] = sortedIntervals[i];

      if (Number(start) <= Number(currentEnd)) {
        overlappingIntervals.push([
          start,
          String(Math.min(Number(currentEnd), Number(end))),
        ]);
      }
      currentEnd = Number(end);
    }

    return overlappingIntervals;
  };

  const overlappingIntervals = findOverlappingIntervals(intervals);
  const mergedIntervals = findMergeIntervals(overlappingIntervals);

  // const findOverlappingIndices = (
  //   mergedIntervals: string[][],
  //   intervals: string[][]
  // ): number[] => {
  //   const overlappingIndices = [];

  //   for (const [mergedStart, mergedEnd] of mergedIntervals) {
  //     for (let i = 0; i < intervals.length; i++) {
  //       const [inputStart, inputEnd] = intervals[i];

  //       if (
  //         (mergedStart <= inputStart && mergedEnd >= inputStart) ||
  //         (mergedStart <= inputEnd && mergedEnd >= inputEnd) ||
  //         (mergedStart >= inputStart && mergedEnd <= inputEnd)
  //       ) {
  //         overlappingIndices.push(i);
  //       }
  //     }
  //   }

  //   return overlappingIndices;
  // };

  // console.log(findOverlappingIndices(mergedIntervals, intervals));

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
