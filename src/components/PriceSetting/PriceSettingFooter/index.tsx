import styles from "./index.module.scss";

interface PriceSettingFooterProps {
  onAddClick: () => void;
}

export default function PriceSettingFooter({
  onAddClick,
}: PriceSettingFooterProps) {
  return (
    <div className={styles.priceSettingFooter}>
      <button
        onClick={onAddClick}
        className={styles.priceSettingFooter__addButton}
      >
        ＋ 新增價格設定
      </button>
    </div>
  );
}
