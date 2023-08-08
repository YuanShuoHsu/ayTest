import styles from "./index.module.scss";

interface Props {
  ranges: number[][];
}

interface Result {
  overlap: number[][];
  notInclude: number[][];
}

const NumberRange: React.FC<Props> = ({ ranges }) => {
  const findOverlapAndNotInclude = (ranges: number[][]): Result => {
    const sortedRanges = ranges.slice().sort((a, b) => a[0] - b[0]);

    let overlap: number[][] = [];
    let notInclude: number[][] = [];

    let currentRange: number[] = sortedRanges[0];

    for (let i = 1; i < sortedRanges.length; i++) {
      const nextRange = sortedRanges[i];

      if (nextRange[0] <= currentRange[1]) {
        currentRange[1] = Math.max(currentRange[1], nextRange[1]);
      } else {
        overlap.push([currentRange[0], currentRange[1]]);
        notInclude.push([currentRange[1] + 1, nextRange[0] - 1]);
        currentRange = nextRange;
      }
    }

    overlap.push(currentRange);

    // Check for ranges before the first input range
    if (sortedRanges[0][0] > 0) {
      notInclude.unshift([0, sortedRanges[0][0] - 1]);
    }

    // Check for ranges after the last input range
    if (sortedRanges[sortedRanges.length - 1][1] < 20) {
      notInclude.push([sortedRanges[sortedRanges.length - 1][1] + 1, 20]);
    }

    return { overlap, notInclude };
  };

  const result = findOverlapAndNotInclude(ranges);

  return (
    <div className={styles.numberRange}>
      <div>Overlapping Ranges: {JSON.stringify(result.overlap)}</div>
      <div>Not Included Ranges: {JSON.stringify(result.notInclude)}</div>
    </div>
  );
};

export default NumberRange;
