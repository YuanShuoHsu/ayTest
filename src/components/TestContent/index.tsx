import NumberFormatter from "../NumberFormatter";
import NumberRange from "../NumberRange";
import PriceSetting from "../PriceSetting";

import priceSetting from "./../../images/priceSetting.png";

import styles from "./index.module.scss";

export default function TestConent() {
  return (
    <section className={styles.testContent}>
      <h2 className={styles.testContent__subtitle}>測驗內容</h2>
      <p className={styles.testContent__paragraph}>
        以下測驗內容請使用 JavaScript ES5+ 實作，並且使用 create-react-app
        架設環境，不能使用 Lodash 或是類似套件，但 UI 相關套件除外
      </p>
      <ul className={styles.testContent__list}>
        <li className={styles.testContent__listItem}>
          <p className={styles.testContent__paragraph}>
            請使用正規表達式實作數字加上千分位
          </p>
          <p className={styles.testContent__paragraph}>input : -7855948.9527</p>
          <p className={styles.testContent__paragraph}>
            output: -7,855,948.9527
          </p>
        </li>
        <div className={styles.testContent__answer}>
          <NumberFormatter />
        </div>
        <li className={styles.testContent__listItem}>
          <p className={styles.testContent__paragraph}>
            請根據輸入的數字區間找出數字 0 到 20 間重疊與未包含的數字區間
          </p>
          <p className={styles.testContent__paragraph}>
            input: [[6, 11], [5, 8], [17, 20], [7], [14,17]]
          </p>
          <p className={styles.testContent__paragraph}>
            {`output: { overlap: [[6, 8], [17]], notInclude: [[0, 4], [12, 13]] }`}
          </p>
        </li>
        <div className={styles.testContent__answer}>
          <NumberRange />
        </div>
        <li className={styles.testContent__listItem}>
          <p className={styles.testContent__paragraph}>
            根據上兩題的內容，完成下列不同年齡價格 UI
          </p>
          <ul className={styles.testContent__list}>
            <li className={styles.testContent__listItem}>
              <p className={styles.testContent__paragraph}>
                UI 如下圖所示，間距色碼字型大小自訂
              </p>
            </li>
            <li className={styles.testContent__listItem}>
              <p className={styles.testContent__paragraph}>
                年齡限制 0 到 20 歲，如有年齡重疊或是空白需顯示錯誤提示
              </p>
            </li>
            <li className={styles.testContent__listItem}>
              <p className={styles.testContent__paragraph}>
                年齡 select 的 option 要 disabled 已被選取的年齡
              </p>
            </li>
            <li className={styles.testContent__listItem}>
              <p className={styles.testContent__paragraph}>
                入住費用需要自動加上千分位
              </p>
            </li>
            <li className={styles.testContent__listItem}>
              <p className={styles.testContent__paragraph}>部分驗證條件範例</p>
              <ul className={styles.testContent__list}>
                <li className={styles.testContent__listItem}>
                  <p className={styles.testContent__paragraph}>
                    年齡重疊的 select 是否有正確顯示錯誤提示
                  </p>
                </li>
                <li className={styles.testContent__listItem}>
                  <p className={styles.testContent__paragraph}>
                    空白的 Input 是否有正確顯示錯誤提示
                  </p>
                </li>
                <li className={styles.testContent__listItem}>
                  <p className={styles.testContent__paragraph}>
                    當所有年齡範圍已經包含 0 到 20 歲時，新增價格設定需要
                    disabled
                  </p>
                </li>
                <li className={styles.testContent__listItem}>
                  <p className={styles.testContent__paragraph}>
                    入住費用是否有正確顯示千分位（包含小數點的輸入與顯示）
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.testContent__imgBox}>
            <img
              className={styles.testContent__image}
              src={priceSetting}
              alt="價格設定"
            />
          </div>
          <div className={styles.testContent__answer}>
            <PriceSetting />
          </div>
        </li>
      </ul>
    </section>
  );
}
