import styles from "./index.module.scss";

interface PriceSettingMainAgeProps {
  firstAge: string;
  secondAge: string;
  onAgeSelectionChange: (newSelections: string[]) => void;
  hasOverlapping: boolean;
}

export default function PriceSettingMainAge({
  firstAge,
  secondAge,
  onAgeSelectionChange,
  hasOverlapping,
}: PriceSettingMainAgeProps) {
  const ageOptions = Array.from({ length: 21 }, (_, index) => index);

  const handleFirstAgeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFirstAge = event.target.value;
    onAgeSelectionChange([newFirstAge, secondAge]);
  };

  const handleSecondAgeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSecondAge = event.target.value;
    onAgeSelectionChange([firstAge, newSecondAge]);
  };

  return (
    <div className={styles.priceSettingMainAge}>
      <p className={styles.priceSettingMainAge__title}>年齡</p>
      <div className={styles.priceSettingMainAge__age}>
        <select
          className={styles.priceSettingMainAge__ageValue}
          value={firstAge}
          onChange={handleFirstAgeChange}
        >
          <option value="" disabled>
            請選擇年齡
          </option>
          {ageOptions.map((age) => (
            <option
              className={styles.priceSettingMainAge__ageOption}
              key={age}
              value={age}
              disabled={secondAge !== "" && age > Number(secondAge)}
            >
              {age}
            </option>
          ))}
        </select>
        <span className={styles.priceSettingMainAge__ageSeparator}>~</span>
        <select
          className={styles.priceSettingMainAge__ageValue}
          value={secondAge}
          onChange={handleSecondAgeChange}
        >
          <option value="" disabled>
            請選擇年齡
          </option>
          {ageOptions.map((age) => (
            <option
              className={styles.priceSettingMainAge__ageOption}
              key={age}
              value={age}
              disabled={firstAge !== "" && age < Number(firstAge)}
            >
              {age}
            </option>
          ))}
        </select>
      </div>
      {hasOverlapping && (
        <p className={styles.priceSettingMainAge__errorMessage}>
          年齡區間不可重疊
        </p>
      )}
    </div>
  );
}
