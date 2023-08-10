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

const findOverlappingIndices = (
  mergedIntervals: string[][],
  intervals: string[][]
): number[] => {
  const overlappingIndices = [];

  for (const [mergedStart, mergedEnd] of mergedIntervals) {
    for (let i = 0; i < intervals.length; i++) {
      const [inputStart, inputEnd] = intervals[i];

      if (
        (mergedStart <= inputStart && mergedEnd >= inputStart) ||
        (mergedStart <= inputEnd && mergedEnd >= inputEnd) ||
        (mergedStart >= inputStart && mergedEnd <= inputEnd)
      ) {
        overlappingIndices.push(i);
      }
    }
  }

  return overlappingIndices;
};

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

  let currentEnd = sortedIntervals[0][1];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const [start, end] = sortedIntervals[i];

    if (Number(start) <= Number(currentEnd)) {
      overlappingIntervals.push([
        start,
        String(Math.min(Number(currentEnd), Number(end))),
      ]);
    }

    currentEnd = end;
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

export {
  findMissingIntervals,
  findOverlappingIndices,
  findMergeIntervals,
  findOverlappingIntervals,
  completeIntervals,
};
