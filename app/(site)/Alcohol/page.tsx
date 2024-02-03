import Image from "next/image"
import styles from "./style.module.css"
import AlcoholSection from "@/Components/AlcoholSection"

const Alcohol = () => {
  return (
    <>
      <article className={styles.alcoholArticle}>
        <div className={styles.alcoholItems}>
          <div className="container">
            <h2 className={`${styles.alcoholTitle} ${styles.white}`}>Biz yeni bölmə açdıq - Alkoqol!</h2>
            <div className={`${styles.calendarAdd} ${styles.flex}`}>
              <Image className={styles.calendarIconItem} src="/assets/icon/calendar.svg" alt="Calendar Icon" width={24} height={24} />
              <p className={styles.dataText}>06.06.23</p>
            </div>
          </div>
        </div>
      </article>
      <AlcoholSection />
    </>
  )
}

export default Alcohol