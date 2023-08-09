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

const completeIntervals = (intervals: string[][]): string[][] => {
  return intervals.map((interval) => {
    if (interval[0] === "") {
      return [interval[1], interval[1]];
    } else if (interval[1] === "") {
      return [interval[0], interval[0]];
    }
    return interval;
  });
};

export { findMergeIntervals, findOverlappingIntervals, completeIntervals };
