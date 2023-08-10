import PriceSettingMainAgeRange from "./PriceSettingMainAge";
import PriceSettingMainCost from "./PriceSettingMainCost";

import styles from "./index.module.scss";

interface PriceSettingMainProps {
  firstAge: string;
  secondAge: string;
  onAgeSelectionChange: (newSelections: string[]) => void;
  hasOverlapping: boolean;
}

export default function PriceSettingMain({
  firstAge,
  secondAge,
  onAgeSelectionChange,
  hasOverlapping,
}: PriceSettingMainProps) {
  return (
    <div className={styles.priceSettingMain}>
      <PriceSettingMainAgeRange
        firstAge={firstAge}
        secondAge={secondAge}
        onAgeSelectionChange={onAgeSelectionChange}
        hasOverlapping={hasOverlapping}
      />
      <PriceSettingMainCost />
    </div>
  );
}
