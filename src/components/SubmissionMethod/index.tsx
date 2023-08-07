import styles from "./index.module.scss";

export default function SubmissionMethod() {
  return (
    <section className={styles.submissionMethod}>
      <h2 className={styles.submissionMethod__subtitle}>繳交方式</h2>
      <ul className={styles.submissionMethod__list}>
        <li className={styles.submissionMethod__listItem}>
          <p className={styles.submissionMethod__paragraph}>
            完成後將測驗上傳至個人 github 並將 github 連結回傳至以下信箱：
          </p>
          <ul className={styles.submissionMethod__list}>
            <li className={styles.submissionMethod__listItem}>
              <p className={styles.submissionMethod__paragraph}>ian.chen@asiayo.com</p>
            </li>
            <li className={styles.submissionMethod__listItem}>
              <p className={styles.submissionMethod__paragraph}>hr@asiayo.com</p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
