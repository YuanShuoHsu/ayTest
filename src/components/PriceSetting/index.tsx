import { useState, Fragment } from "react";

import PriceSettingHeader from "./PriceSettingHeader";
import PriceSettingMain from "./PriceSettingMain";
import PriceSettingDivider from "./PriceSettingDivider";
import PriceSettingFooter from "./PriceSettingFooter";

import {
  findMissingIntervals,
  findOverlappingIndices,
  findMergeIntervals,
  findOverlappingIntervals,
  completeIntervals,
} from "../../utils/numberRange";

import styles from "./index.module.scss";

export default function PriceSetting() {
  const [sections, setSections] = useState<{ id: number }[]>([
    { id: Date.now() },
  ]);
  const [ageSelections, setAgeSelections] = useState<string[][]>([[]]);
  const [costInputs, setCostInputs] = useState<string[]>([""]);

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
    setCostInputs((prevCostInputs) => {
      const newCostInputs = [...prevCostInputs];
      newCostInputs[sectionIndex] = newInputNumber;
      return newCostInputs;
    });
  };

  const isAgeSelectionEmpty = ageSelections.some(
    ([firstAge, secondAge]) => firstAge === "" && secondAge === ""
  );
  const isCostInputEmpty = costInputs.some((inputNumber) => inputNumber === "");

  const handleHeaderRemoveClick = (sectionIndex: number) => {
    setSections((prevSections) =>
      prevSections.filter((_, index) => index !== sectionIndex)
    );

    setAgeSelections((prevSelections) => {
      return prevSelections.filter((_, index) => index !== sectionIndex);
    });

    setCostInputs((prevCostInputs) =>
      prevCostInputs.filter((_, index) => index !== sectionIndex)
    );
  };

  const handleFooterAddClick = () => {
    setSections((prevSections) => [...prevSections, { id: Date.now() }]);
    setAgeSelections((prevSelections) => [...prevSelections, []]);
    setCostInputs((prevCostInputs) => [...prevCostInputs, ""]);
  };

  const completedIntervals = completeIntervals(ageSelections);
  const overlappingIntervals = findOverlappingIntervals(completedIntervals);
  const mergedIntervals = findMergeIntervals(overlappingIntervals);
  const overlappingIndices = findOverlappingIndices(
    mergedIntervals,
    completedIntervals
  );

  const missingIntervals = findMissingIntervals(completedIntervals);

  return (
    <div className={styles.priceSetting}>
      {sections.map((section, sectionIndex) => (
        <Fragment key={section.id}>
          <PriceSettingHeader
            index={sectionIndex + 1}
            onRemoveClick={() => handleHeaderRemoveClick(sectionIndex)}
          />
          <PriceSettingMain
            firstAge={ageSelections[sectionIndex]?.[0] || ""}
            secondAge={ageSelections[sectionIndex]?.[1] || ""}
            onAgeSelectionChange={(newSelections) =>
              handleAgeSelectionChange(sectionIndex, newSelections)
            }
            cost={costInputs[sectionIndex] || ""}
            onCostInputChange={(newInputNumber) =>
              handleCostInputChange(sectionIndex, newInputNumber)
            }
            hasOverlapping={overlappingIndices.includes(sectionIndex)}
          />
          {sectionIndex < ageSelections.length - 1 && <PriceSettingDivider />}
        </Fragment>
      ))}
      <PriceSettingFooter
        onAddClick={handleFooterAddClick}
        disabled={
          missingIntervals.length === 0 ||
          isAgeSelectionEmpty ||
          isCostInputEmpty
        }
      />
    </div>
  );
}
