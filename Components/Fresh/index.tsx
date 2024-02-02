import Image from "next/image"
import styles from "./style.module.css"

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={`${styles.articleItems} ${styles.flex} ${styles.between}`}>
          <div className={styles.articleTexts}>
            <div className={styles.articleTextCont}>
              <p className={`${styles.articleText} ${styles.width}`}>Müştəri məmnuniyyətinə güclü diqqət yetirməklə, biz yüksək keyfiyyətli FMCG markaları ilə əlaqəli keyfiyyət və tanınmadan ödün vermədən bizneslərə rəqabətli qiymətlərdən faydalanmağa imkan verən müstəsna dəyər təqdim etməyə çalışırıq.</p>
              <h2 className={styles.aboutTitle}>Təzə. Tez. Fantastik.</h2>
            </div>
          </div>
          <div className={styles.articleImage}>
            <Image src="/assets/img/colasprite.png" alt="Cola Image" width={458} height={458} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection