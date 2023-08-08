import React, { useState } from "react";
import NumberRangeOverlap from "./NumberRangeOverlap";

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

  const isValidRange = (range: number[]): boolean => {
    const [start, end] = range;
    return (
      range.length !== 0 &&
      start !== undefined &&
      (end === undefined || (0 <= start && end <= 20 && start < end))
    );
  };

  const parseInput = (input: string): number[][] => {
    try {
      const parsedIntervals = JSON.parse(input) as number[][];
      if (parsedIntervals.some((range) => !isValidRange(range))) {
        return [];
      }
      return parsedIntervals;
    } catch (error) {
      return [];
    }
  };

  const inputIntervals = parseInput(inputRange);

  return (
    <div className={styles.numberRange}>
      <div className={styles.input}>
        <label className={styles.inputLabel} htmlFor="inputRange">
          輸入：
        </label>
        <input
          className={styles.inputValue}
          type="text"
          id="inputRange"
          value={inputRange}
          onChange={handleInputChange}
          placeholder="請輸入範圍"
        />
      </div>
      <p className={styles.output}>
        <span className={styles.outputLabel}>輸出：</span>
        {inputIntervals.length ? (
          <NumberRangeOverlap />
        ) : (
          <span className={styles.outputValue}>格式錯誤</span>
        )}
      </p>
    </div>
  );
}
