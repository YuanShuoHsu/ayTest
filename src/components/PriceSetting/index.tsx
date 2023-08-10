import { useState, Fragment } from "react";

import PriceSettingHeader from "./PriceSettingHeader";
import PriceSettingMain from "./PriceSettingMain";
import PriceSettingDivider from "./PriceSettingDivider";
import PriceSettingFooter from "./PriceSettingFooter";

// import {
//   // findMissingIntervals,
//   findOverlappingIndices,
//   findMergeIntervals,
//   findOverlappingIntervals,
//   completeIntervals,
// } from "../../utils/numberRange";

import styles from "./index.module.scss";

export default function PriceSetting() {
  const [ageSelections, setAgeSelections] = useState<string[][]>([[]]);
  const [costSelections, setCostSelections] = useState<string[]>([""]);

  console.log(ageSelections, costSelections);
  const handleAgeSelectionChange = (
    sectionIndex: number,
    newSelections: string[]
  ) => {
    setAgeSelections((prevSelections) => {
      const newSelectionsArray = [...prevSelections];
      newSelectionsArray[sectionIndex] = newSelections;
      return newSelectionsArray;
    });
  };

  const handleCostInputChange = (
    sectionIndex: number,
    newInputNumber: string
  ) => {
    setCostSelections((prevCostSelections) => {
      const newCostSelections = [...prevCostSelections];
      newCostSelections[sectionIndex] = newInputNumber;
      return newCostSelections;
    });
  };

  const isAgeSelectionEmpty = ageSelections.some(
    ([firstAge, secondAge]) => firstAge === "" && secondAge === ""
  );
  const isCostSelectionEmpty = costSelections.some(
    (inputNumber) => inputNumber === ""
  );

  const handleHeaderRemoveClick = (sectionIndex: number) => {
    setAgeSelections((prevSelections) => {
      return prevSelections.filter((_, index) => index !== sectionIndex);
    });

    setCostSelections((prevCostSelections) => {
      return prevCostSelections.filter((_, index) => index !== sectionIndex);
    });
  };

  const handleFooterAddClick = () => {
    setAgeSelections((prevSelections) => {
      return [...prevSelections, []];
    });

    setCostSelections((prevCostSelections) => {
      return [...prevCostSelections, ""];
    });
  };

  return (
    <div className={styles.priceSetting}>
      {ageSelections.map((selections, sectionIndex) => (
        <Fragment key={sectionIndex}>
          <PriceSettingHeader
            index={sectionIndex + 1}
            sectionIndex={sectionIndex}
            onRemoveClick={() => handleHeaderRemoveClick(sectionIndex)}
          />
          <PriceSettingMain
            firstAge={ageSelections[sectionIndex]?.[0] || ""}
            secondAge={ageSelections[sectionIndex]?.[1] || ""}
            onAgeSelectionChange={(newSelections) =>
              handleAgeSelectionChange(sectionIndex, newSelections)
            }
            cost={costSelections[sectionIndex] || ""}
            onCostInputChange={(newInputNumber) =>
              handleCostInputChange(sectionIndex, newInputNumber)
            }
            // hasOverlapping={overlappingIndices.includes(sectionIndex)}
          />
          {sectionIndex < ageSelections.length - 1 && <PriceSettingDivider />}
        </Fragment>
      ))}
      <PriceSettingFooter
        onAddClick={handleFooterAddClick}
        disabled={
          // missingIntervals.length === 0 ||
          isAgeSelectionEmpty || isCostSelectionEmpty
        }
      />
    </div>
  );
}
