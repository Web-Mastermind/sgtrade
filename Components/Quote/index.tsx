import Image from "next/image"
import styles from "./style.module.css"
import { Trophy } from "@/src/links/Links"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Quote = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <article className={styles.article}>
      <div className="container">
        <div className={styles.articleItems}>
          <h3 className={styles.articleTitle}>Niyə biz?</h3>
          <div className={styles.articleTextItems}>
            <Image className={styles.quoteIconBarcode} src="/assets/icon/quote.svg" alt="" width={22} height={22} />
            <p className={styles.articleText}>SGTrade Haqqında</p>
          </div>
        </div>
        <div className={styles.trophy}>
          {
            Trophy.map(({ id, src, alt, width, height, title, text }) => {
              return (
                <div data-aos="zoom-in-left" key={id} className={styles.trophyItems}>
                  <Image className={styles.quoteIcon} src={src} alt={alt} width={width} height={height} />
                  <h4 className={`${styles.trophyTitle} ${styles.selection}`}>{title}</h4>
                  <p className={styles.trophyText}>{text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </article>
  )
}

export default Quote

