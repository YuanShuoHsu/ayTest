import React from "react";
import styles from "./index.module.scss"

export default function TestDuration() {
  return (
    <section className={styles.testDuration}>
      <h2 className={styles.testDuration__subtitle}>測驗時間</h2>
      <ul className={styles.testDuration__list}>
        <li className={styles.testDuration__listItem}>
          <p className={styles.testDuration__paragraph}>
            請在收到前測 N+3 天內完成並回覆。如在時間內無法完成所有測驗也請回覆
          </p>
        </li>
      </ul>
    </section>
  );
}
