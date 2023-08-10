import styles from "./index.module.scss";

import {
  thousandSeparator,
  cleanInputValue,
} from "./../../../../utils/numberFormatter";

interface PriceSettingMainCostProps {
  cost: string;
  onCostInputChange: (newInputNumber: string) => void;
}

export default function PriceSettingMainCost({
  cost,
  onCostInputChange,
}: PriceSettingMainCostProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const cleanInputNumber = cleanInputValue(inputValue);
    const formattedNumber = thousandSeparator(cleanInputNumber);

    onCostInputChange(formattedNumber);
  };

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
          value={cost}
          onChange={handleInputChange}
          placeholder="請輸入費用"
        />
      </div>
      {!cost && (
        <p className={styles.priceSettingMainCost__errorMessage}>
          不可以為空白
        </p>
      )}
      <p className={styles.priceSettingMainCost__additionalMessage}>
        輸入 0 表示免費
      </p>
    </div>
  );
}
