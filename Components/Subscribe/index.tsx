import Image from "next/image"
import Link from "next/link"
import styles from "./style.module.css"

const Subscribe = () => {
  return (
    <section className={styles.subscribeSection}>
      <div className="container">
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
    </section>
  )
}

export default Subscribe