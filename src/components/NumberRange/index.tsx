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

  const isValidRange = (range: number[]): boolean => {
    const [start, end] = range;
    return (
      start !== undefined &&
      range.length !== 0 &&
      ((end === undefined && 0 <= start && start <= 20) ||
        (end !== undefined && 0 <= start && end <= 20 && start < end))
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
