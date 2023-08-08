import React, { useState } from "react";
import styles from "./index.module.scss";

export default function NumberFormatter() {
  const [inputNumber, setInputNumber] = useState<string>("-7855948.9527");

  function ThousandSeparator(number: string): string {
    const parts = number.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    
    const inputValue = event.target.value;
    const validInput = inputValue.replace(/[^\d.-]/g, "");
    setInputNumber(validInput);
  }

  const formattedNumber: string = ThousandSeparator(inputNumber);

  return (
    <div className={styles.numberFormatter}>
      <div className={styles.numberFormatter__input}>
        <label className={styles.numberFormatter__inputLabel} htmlFor="inputNumber">
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
        <span className={styles.numberFormatter__outputValue}>{formattedNumber}</span>
      </p>
    </div>
  );
}
