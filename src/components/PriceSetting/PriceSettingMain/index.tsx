import PriceSettingMainAgeRange from "./PriceSettingMainAge";
import PriceSettingMainCost from "./PriceSettingMainCost";

import styles from "./index.module.scss";

export default function PriceSettingMain() {
  return (
    <div className={styles.priceSettingMain}>
      <PriceSettingMainAgeRange />
      <PriceSettingMainCost />
    </div>
  );
}
