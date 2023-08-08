import { useState, Fragment } from "react";
import PriceSettingHeader from "./PriceSettingHeader";
import PriceSettingMain from "./PriceSettingMain";
import PriceSettingDivider from "./PriceSettingDivider";
import PriceSettingFooter from "./PriceSettingFooter";

import styles from "./index.module.scss";

export default function PriceSetting() {
  const [sections, setSections] = useState<number[]>([1]);

  const handleHeaderRemoveClick = (sectionIndex: number) => {
    setSections((prevSections) =>
      prevSections.filter((index) => index !== sectionIndex)
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
            index={index + 1}
            sectionIndex={sectionIndex}
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
