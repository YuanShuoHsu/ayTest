import styles from "./index.module.scss";

export default function PriceSettingMain() {
  return (
    <div className={styles.priceSettingMain}>
      <div className={styles.ageRange}>
        <p className={styles.ageRangeText}>年齡</p>
        <div className={styles.age}>
          <input
            className={styles.ageValue}
            type="text"
            placeholder="請選擇年齡"
          />
          <span className={styles.ageSeparator}>~</span>
          <input
            className={styles.ageValue}
            type="text"
            placeholder="請選擇年齡"
          />
        </div>
        <p className={styles.errorMessage}>年齡區間不可重疊</p>
      </div>
      <div className={styles.accommodationCost}>
        <p className={styles.accommodationCostText}>入住費用（每人每晚）</p>
        <div className={styles.cost}>
          <label className={styles.costLabel} htmlFor="costValue">
            TWD
          </label>
          <input
            className={styles.costValue}
            type="text"
            id="costValue"
            placeholder="請輸入費用"
          />
        </div>
        <p className={styles.errorMessage}>不可以為空白</p>
        <p className={styles.additionalMessage}>輸入 0 表示免費</p>
      </div>
    </div>
  );
}
