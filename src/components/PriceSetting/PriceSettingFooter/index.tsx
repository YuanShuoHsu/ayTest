import styles from "./index.module.scss";

interface PriceSettingFooterProps {
  onAddClick: () => void;
  disabled: boolean;
}

export default function PriceSettingFooter({
  onAddClick,
  disabled,
}: PriceSettingFooterProps) {
  return (
    <div className={styles.priceSettingFooter}>
      <button
        onClick={onAddClick}
        className={`${styles.priceSettingFooter__addButton} ${
          disabled ? styles["priceSettingFooter__addButton--disabled"] : ""
        }`}
        disabled={disabled}
      >
        ＋ 新增價格設定
      </button>
    </div>
  );
}
