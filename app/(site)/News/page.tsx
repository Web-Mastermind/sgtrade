import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import { NewsLinks } from "@/src/links/Links"



const News = () => {
  return (
    <main className={styles.newsMain}>
      <div className="container">
        <h1 className={`${styles.newsTitle} ${styles.white}`}>Xəbərlər</h1>
        <div className={`${styles.newsItems} ${styles.flex}`}>
          {
            NewsLinks.map(({ id, title, text, imageSrc, iconSrc, plusSrc }) => {
              return (
                <div key={id} className={styles.newsLinks}>
                  <Link href="/"><Image className={styles.newsProductImg} src={imageSrc} alt="Alcohol Image" width={305} height={277} /></Link>
                  <div className={styles.newsSection}>
                    <h2 className={`${styles.newsSectionItems} ${styles.white}`}>{title}</h2>
                    <div className={`${styles.calendarItem} ${styles.flex}`}>
                      <div className={`${styles.calendarAdd} ${styles.flex}`}>
                        <Image className={styles.calendarIconItem} src={iconSrc} alt="Calendar Icon" width={24} height={24} />
                        <p className={styles.dataText}>{text}</p>
                      </div>
                      <Link href="/"><Image className={styles.calendarIconItem} src={plusSrc} alt="Calendar Icon" width={31} height={31} /></Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className={styles.newsReqsub}>
          <div className={styles.requestContainer}>
            <p className={styles.requestText}>Məlumat və sorğunuzu göndərin və sizinlə tezliklə əlaqə saxlayacağıq!</p>
            <div className={styles.requestLink}>
              <Image className={styles.requestImage} src="/assets/icon/requesticon.svg" alt="Send Request Icon" width={12} height={12} />
              <Link className={`${styles.requestLinkItem} ${styles.white}`} href="/">Sorğu göndərin</Link>
            </div>
          </div>
          <div className={`${styles.subscribeContainer} ${styles.white}`}>
            <p className={styles.subscribeText}>Yeniliklərimizə abunə olun!</p>
            <form className={styles.subscribeLink}>
              <button className={styles.subscribeButton}><Image className={styles.subscribeImage} src="/assets/icon/subicon.svg" alt="Send Request Icon" width={30} height={30} /></button>
              <input type="email" placeholder="E-mailinizi daxil edin" />
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default News