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
  const [ageSelections, setAgeSelections] = useState<string[][]>([]);

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

  const completedIntervals = completeIntervals(ageSelections);
  const overlappingIntervals = findOverlappingIntervals(completedIntervals);
  const mergedIntervals = findMergeIntervals(overlappingIntervals);
  const overlappingIndices = findOverlappingIndices(
    mergedIntervals,
    completedIntervals
  );

  const missingIntervals = findMissingIntervals(completedIntervals);

  console.log(missingIntervals);
  const [sections, setSections] = useState<number[]>([0]);

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
          <PriceSettingMain
            firstAge={ageSelections[sectionIndex]?.[0] || ""}
            secondAge={ageSelections[sectionIndex]?.[1] || ""}
            onAgeSelectionChange={(newSelections) =>
              handleAgeSelectionChange(sectionIndex, newSelections)
            }
            hasOverlapping={overlappingIndices.includes(index)}
          />
          {index < sections.length - 1 && <PriceSettingDivider />}
        </Fragment>
      ))}
      <PriceSettingFooter
        onAddClick={handleFooterAddClick}
        disabled={missingIntervals.length === 0}
      />
    </div>
  );
}
