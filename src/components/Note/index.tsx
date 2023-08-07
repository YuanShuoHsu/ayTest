import styles from "./index.module.scss";

export default function Note() {
  return (
    <section className={styles.note}>
      <p className={styles.note__paragraph}>附註：</p>
      <ul className={styles.note__list}>
        <li className={styles.note__listItem}>
          <p className={styles.note__paragraph}>
            請在 Repo 名稱中避免使用 AsiaYo 等用詞，以免您的努力被抄襲。
          </p>
        </li>
        <li className={styles.note__listItem}>
          <p className={styles.note__paragraph}>
            如有任何測驗問題，隨時歡迎詢問。祝您有美好的一天。
          </p>
        </li>
      </ul>
    </section>
  );
}
