import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import { NewsLinks } from "@/src/links/Links"



const News = () => {
  return (
    <main className={styles.newsMain}>
      <div className="container">
        <h1 className={`${styles.newsTitle} ${styles.white}`}>Xəbərlər</h1>
        <div className={styles.newsItems}>
          {
            NewsLinks.map(({ id, title, text, imageSrc, iconSrc, plusSrc }) => {
              return (
                <div key={id} className={styles.newsLinks}>
                  <Link href="/"><Image className={styles.newsProductImg} src={imageSrc} alt="Alcohol Image" width={305} height={277} /></Link>
                  <div className={styles.newsSection}>
                    <h2 className={`${styles.newsSectionItems} ${styles.white}`}>{title}</h2>
                    <div className={styles.calendarItem}>
                      <div className={styles.calendarAdd}>
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
      </div>
    </main>
  )
}

export default News