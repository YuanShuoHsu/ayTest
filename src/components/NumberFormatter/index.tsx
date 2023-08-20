import React, { useState } from "react";
import styles from "./index.module.scss";

export default function NumberFormatter() {
  const [inputNumber, setInputNumber] = useState<string>("-7855948.9527");

  const thousandSeparator = (number: string): string => {
    const parts = number.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // `/`：正則表達式的起始和結束符號。
    // `\B`：匹配一個非單字邊界，確保匹配不是單字的開始或結束。
    // `(?=(\d{3})+(?!\d))`：這是一個正向先行斷言，它匹配在當前位置後面的內容，但不消耗任何字符。具體來說：
    // `(?=\d{3})`：匹配三個數字（\d 表示數字字符）。
    // `+`：表示前面的 \d{3} 可以重複一次或多次，以匹配更多的三位數字。
    // `(?!\d)`：負向後行斷言，確保匹配後面沒有數字。
    // `/g`：全局修飾符，使正則表達式在整個字串中尋找所有匹配。
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

    if (inputValue.startsWith("-")) {
      inputValue = "-" + inputValue.slice(1).replace(/-/g, "");
    }

    if (inputValue.startsWith("-") && inputValue.charAt(1) === ".") {
      inputValue = "-" + inputValue.slice(1).replace(/./g, "");
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

  const formattedNumber: string = thousandSeparator(inputNumber);

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
