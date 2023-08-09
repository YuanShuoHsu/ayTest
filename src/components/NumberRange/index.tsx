import React, { useState } from "react";

import NumberRangeOverlap from "./NumberRangeOverlap";
import NumberRangeNotInclude from "./NumberRangeNotInclude";

import styles from "./index.module.scss";

export default function NumberRange() {
  const [inputRange, setInputRange] = useState<string>(
    "[[6, 11], [5, 8], [17, 20], [7], [14, 17]]"
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const trimmedInput = inputValue.trim();
    const validInput = trimmedInput.replace(/[^[\],\d\s]/g, "");
    setInputRange(validInput);
  };

  const isValidRange = (range: string[]): boolean => {
    const [start, end] = range;

    return (
      0 <= Number(start) && Number(end) <= 20 && Number(start) <= Number(end)
    );
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

  const parseInput = (input: string): string[][] => {
    try {
      const parsedIntervals: number[][] = JSON.parse(input);

      const stringIntervals: string[][] = parsedIntervals.map((interval) => {
        if (interval.length === 1) {
          return [String(interval[0]), ""];
        }
        return interval.map((item) => String(item));
      });

      const completedIntervals = completeIntervals(stringIntervals);

      if (completedIntervals.some((range) => !isValidRange(range))) {
        return [];
      }

      return completedIntervals;
    } catch (error) {
      return [];
    }
  };

  const inputIntervals = parseInput(inputRange);

  return (
    <div className={styles.numberRange}>
      <div className={styles.numberRange__input}>
        <label className={styles.numberRange__inputLabel} htmlFor="inputRange">
          input:
        </label>
        <input
          className={styles.numberRange__inputValue}
          type="text"
          id="inputRange"
          value={inputRange}
          onChange={handleInputChange}
          placeholder="請輸入範圍"
        />
      </div>
      <p className={styles.numberRange__output}>
        <span className={styles.numberRange__outputLabel}>output: </span>
        {inputIntervals.length ? (
          <span className={styles.numberRange__outputValue}>
            {`{ overlap: `}
            <NumberRangeOverlap intervals={inputIntervals} />
            {`, notInclude: `}
            <NumberRangeNotInclude intervals={inputIntervals} />
            {` }`}
          </span>
        ) : (
          <span className={styles.numberRange__outputValue}>格式錯誤</span>
        )}
      </p>
    </div>
  );
}
