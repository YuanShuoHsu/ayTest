import TestConent from "../../components/TestContent";
import TestDuration from "../../components/TestDuration";
import SubmissionMethod from "../../components/SubmissionMethod";
import Note from "../../components/Note";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>前測</h1>
      <TestConent />
      <TestDuration />
      <SubmissionMethod />
      <Note />
    </div>
  );
}
