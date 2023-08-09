import { useState } from "react";
import styles from "./index.module.scss";

export default function PriceSettingMainAge() {
  const ageOptions = Array.from({ length: 21 }, (_, index) => index);

  const [firstAge, setFirstAge] = useState<string>("");
  const [secondAge, setSecondAge] = useState<string>("");

  return (
    <div className={styles.priceSettingMainAge}>
      <p className={styles.priceSettingMainAge__title}>年齡</p>
      <div className={styles.priceSettingMainAge__age}>
        <select
          className={styles.priceSettingMainAge__ageValue}
          value={firstAge}
          onChange={(e) => setFirstAge(e.target.value)}
        >
          <option value="" disabled>
            請選擇年齡
          </option>
          {ageOptions.map((age) => (
            <option
              className={styles.priceSettingMainAge__ageOption}
              key={age}
              value={age}
              disabled={secondAge !== "" && age >= Number(secondAge)}
            >
              {age}
            </option>
          ))}
        </select>
        <span className={styles.priceSettingMainAge__ageSeparator}>~</span>
        <select
          className={styles.priceSettingMainAge__ageValue}
          value={secondAge}
          onChange={(e) => setSecondAge(e.target.value)}
        >
          <option value="" disabled>
            請選擇年齡
          </option>
          {ageOptions.map((age) => (
            <option
              className={styles.priceSettingMainAge__ageOption}
              key={age}
              value={age}
              disabled={firstAge !== "" && age <= Number(firstAge)}
            >
              {age}
            </option>
          ))}
        </select>
      </div>
      <p className={styles.priceSettingMainAge__errorMessage}>
        年齡區間不可重疊
      </p>
    </div>
  );
}
