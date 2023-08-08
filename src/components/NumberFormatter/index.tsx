import React, { useState } from "react";
import styles from "./index.module.scss";

export default function NumberFormatter() {
  const [inputNumber, setInputNumber] = useState<string>("-7855948.9527");

  const ThousandSeparator = (number: string): string => {
    const parts = number.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^\d.-]/g, "");

    inputValue = inputValue.replace(/^\./g, "");
    inputValue = inputValue.replace(/\.{2,}/g, ".");
    inputValue = inputValue
      .replace(".", "$#$")
      .replace(/\./g, "")
      .replace("$#$", ".");

    if (inputValue.indexOf("-") > 0) {
      inputValue = inputValue.replace("-", "");
    } else if (inputValue.indexOf("-") === 0) {
      inputValue = "-" + inputValue.replace(/-/g, "");
    }

    if (inputValue.startsWith("-") && inputValue.charAt(1) === ".") {
      inputValue = "-" + inputValue.slice(1).replace(".", "");
    }

    if (inputValue.startsWith("0") && !inputValue.startsWith("0.")) {
      if (inputValue.length > 1) {
        inputValue = "0." + inputValue.slice(1);
      } else {
        inputValue = "0";
      }
    }

    if (inputValue.startsWith("-0") && !inputValue.startsWith("-0.")) {
      if (inputValue.length > 2) {
        inputValue = "-0." + inputValue.slice(2);
      } else if (inputValue.length > 1) {
        inputValue = "-0";
      } else {
        inputValue = "-";
      }
    }

    setInputNumber(inputValue);
  };

  const formattedNumber: string = ThousandSeparator(inputNumber);

  return (
    <div className={styles.numberFormatter}>
      <div className={styles.numberFormatter__input}>
        <label
          className={styles.numberFormatter__inputLabel}
          htmlFor="inputNumber"
        >
          input:
        </label>
        <input
          className={styles.numberFormatter__inputValue}
          type="text"
          id="inputNumber"
          value={inputNumber}
          onChange={handleInputChange}
          placeholder="請輸入數字"
        />
      </div>
      <p className={styles.numberFormatter__output}>
        <span className={styles.numberFormatter__outputLabel}>output:</span>
        <span className={styles.numberFormatter__outputValue}>
          {formattedNumber}
        </span>
      </p>
    </div>
  );
}
