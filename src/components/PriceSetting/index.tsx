import styles from "./index.module.scss";

export default function PriceSetting() {
  return (
    <div className={styles.priceSetting}>
      <div className={styles.priceSetting__header}>
        <h4 className={styles.title}>價格設定</h4>
        <button className={styles.removeButton}>Ｘ移除</button>
      </div>
      <div className={styles.priceSetting__main}>
        <div className={styles.ageRange}>
          <p className={styles.ageRangeText}>年齡</p>
          <div className={styles.age}>
            <input type="text" className={styles.ageValue} />
            <span className={styles.ageSeparator}>～</span>
            <input type="text" className={styles.ageValue} />
          </div>
          <p className={styles.errorMessage}>年齡區間不可重疊</p>
        </div>
        <div className={styles.accommodationCost}>
          <p className={styles.accommodationCostText}>入住費用（每人每晚）</p>
          <div className={styles.cost}>
            <label className={styles.costLabel} htmlFor="">TWD</label>
            <input className={styles.costValue} type="text" />
          </div>
          <p className={styles.errorMessage}>不可以為空白</p>
          <p className={styles.additionalMessage}>輸入 0 表示免費</p>
        </div>
      </div>
      <div className={styles.priceSetting__footer}>
        <button className={styles.addButton}>＋新增價格設定</button>
      </div>
    </div>
  );
}
