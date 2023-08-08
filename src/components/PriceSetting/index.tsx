import { useState, Fragment } from "react";
import PriceSettingHeader from "./PriceSettingHeader";
import PriceSettingMain from "./PriceSettingMain";
import PriceSettingDivider from "./PriceSettingDivider";
import PriceSettingFooter from "./PriceSettingFooter";

import styles from "./index.module.scss";

export default function PriceSetting() {
  const [sections, setSections] = useState<number[]>([1]);

  const handleHeaderRemoveClick = (index: number) => {
    setSections((prevSections) =>
      prevSections.filter((sectionIndex) => sectionIndex !== index)
    );
  };

  const handleFooterAddClick = () => {
    const maxIndex = Math.max(...sections);
    setSections((prevSections) => [...prevSections, maxIndex + 1]);
  };

  return (
    <div className={styles.priceSetting}>
      {sections.map((sectionIndex, index) => (
        <Fragment key={sectionIndex}>
          <PriceSettingHeader
            index={sectionIndex}
            onRemoveClick={handleHeaderRemoveClick}
          />
          <PriceSettingMain />
          {index < sections.length - 1 && <PriceSettingDivider />}
        </Fragment>
      ))}
      <PriceSettingFooter onAddClick={handleFooterAddClick} />
    </div>
  );
}
