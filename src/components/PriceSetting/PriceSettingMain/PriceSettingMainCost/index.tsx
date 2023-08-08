// import { useState } from "react";
import styles from "./index.module.scss";

export default function PriceSettingMainCost() {
  // const [inputNumber, setInputNumber] = useState<string>("-7855948.9527");

  // function ThousandSeparator(number: string): string {
  //   const parts = number.split(".");
  //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return parts.join(".");
  // }

  // function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   let inputValue = e.target.value;
  //   inputValue = inputValue.replace(/[^\d.-]/g, "");

    
  //   setInputNumber(inputValue);
  // }

  // const formattedNumber: string = ThousandSeparator(inputNumber);

  return (
    <div className={styles.priceSettingMainCost}>
      <p className={styles.priceSettingMainCost__title}>入住費用（每人每晚）</p>
      <div className={styles.priceSettingMainCost__cost}>
        <label
          className={styles.priceSettingMainCost__costLabel}
          htmlFor="costValue"
        >
          TWD
        </label>
        <input
          className={styles.priceSettingMainCost__costValue}
          type="text"
          id="costValue"
          // value={inputNumber}
          // onChange={handleInputChange}
          placeholder="請輸入費用"
        />
      </div>
      <p className={styles.priceSettingMainCost__errorMessage}>不可以為空白</p>
      <p className={styles.priceSettingMainCost__additionalMessage}>
        輸入 0 表示免費
      </p>
    </div>
  );
}
