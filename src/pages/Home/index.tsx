import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__title}>前測</h1>
      <section className={styles.home__section}>
        <h2 className={styles.home__subtitle}>測驗內容</h2>
        <p className={styles.home__paragraph}>
          以下測驗內容請使用 JavaScript ES5+ 實作，並且使用 create-react-app
          架設環境，不能使用 Lodash 或是類似套件，但 UI 相關套件除外
        </p>
        <ul className={styles.home__list}>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              請使用正規表達式實作數字加上千分位
            </p>
            <p className={styles.home__paragraph}>input : -7855948.9527</p>
            <p className={styles.home__paragraph}>output: -7,855,948.9527</p>
          </li>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              請根據輸入的數字區間找出數字 0 到 20 間重疊與未包含的數字區間
            </p>
            <p className={styles.home__paragraph}>
              input: [[6, 11], [5, 8], [17, 20], [7], [14,17]]
            </p>
            <p className={styles.home__paragraph}>
              {`output: { overlap: [[6, 8], [17]], notInclude: [[0, 4], [12, 13]] }`}
            </p>
          </li>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              根據上兩題的內容，完成下列不同年齡價格 UI
            </p>
            <ul className={styles.home__list}>
              <li className={styles.home__listItem}>
                <p className={styles.home__paragraph}>
                  UI 如下圖所示，間距色碼字型大小自訂
                </p>
              </li>
              <li className={styles.home__listItem}>
                年齡限制 0 到 20 歲，如有年齡重疊或是空白需顯示錯誤提示
              </li>
              <li className={styles.home__listItem}>
                年齡 select 的 option 要 disabled 已被選取的年齡
              </li>
              <li className={styles.home__listItem}>入住費用需要自動加上千分位</li>
              <li className={styles.home__listItem}>
                <p className={styles.home__paragraph}>部分驗證條件範例</p>
                <ul className={styles.home__list}>
                  <li className={styles.home__listItem}>
                    <p className={styles.home__paragraph}>
                      年齡重疊的 select 是否有正確顯示錯誤提示
                    </p>
                  </li>
                  <li className={styles.home__listItem}>
                    <p className={styles.home__paragraph}>
                      空白的 Input 是否有正確顯示錯誤提示
                    </p>
                  </li>
                  <li className={styles.home__listItem}>
                    <p className={styles.home__paragraph}>
                      當所有年齡範圍已經包含 0 到 20 歲時，新增價格設定需要
                      disabled
                    </p>
                  </li>
                  <li className={styles.home__listItem}>
                    <p className={styles.home__paragraph}>
                      入住費用是否有正確顯示千分位（包含小數點的輸入與顯示）
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.home__section}>
        <h2 className={styles.home__subtitle}>測驗時間</h2>
        <ul className={styles.home__list}>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              請在收到前測 N+3
              天內完成並回覆。如在時間內無法完成所有測驗也請回覆
            </p>
          </li>
        </ul>
      </section>
      <section className={styles.home__section}>
        <h2 className={styles.home__subtitle}>繳交方式</h2>
        <ul className={styles.home__list}>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              完成後將測驗上傳至個人 github 並將 github 連結回傳至以下信箱:
            </p>
            <ul className={styles.home__list}>
              <li className={styles.home__listItem}>
                <p className={styles.home__paragraph}>ian.chen@asiayo.com</p>
              </li>
              <li className={styles.home__listItem}>
                <p className={styles.home__paragraph}>hr@asiayo.com</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.home__note}>
        <p className={styles.home__paragraph}>附註:</p>
        <ul className={styles.home__list}>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              請在 Repo 名稱中避免使用 AsiaYo 等用詞，以免您的努力被抄襲。
            </p>
          </li>
          <li className={styles.home__listItem}>
            <p className={styles.home__paragraph}>
              如有任何測驗問題，隨時歡迎詢問。祝您有美好的一天。
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
