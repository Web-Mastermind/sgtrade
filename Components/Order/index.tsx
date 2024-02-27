import Image from "next/image"
import styles from "./style.module.css"


const Order = () => {
  return (
    <article className={styles.importArticle} >
      <div className="container">
        <div className={`${styles.articleItems} ${styles.flex} ${styles.between}`}>
          <div className={styles.articleTexts}>
            <h2 className={`${styles.articleTitle} ${styles.white}`}>Necə işləyirik?</h2>
            <div className={styles.articleTextCont}>
              <p className={`${styles.articleText} ${styles.width}`}>Müştəri məmnuniyyətinə güclü diqqət yetirməklə, biz yüksək keyfiyyətli FMCG markaları ilə əlaqəli keyfiyyət və tanınmadan ödün vermədən bizneslərə rəqabətli qiymətlərdən faydalanmağa imkan verən müstəsna dəyər təqdim etməyə çalışırıq.</p>
            </div>
          </div>
          <div className={styles.articleImage}>
            <Image className={styles.paletImg} src="/assets/img/palet.png" alt="Palet Image" width={520} height={520} />
          </div>
        </div>
        <div className={`${styles.orderContainer} ${styles.flex}`}>
          <div className={styles.articleDelivery}>
            <h3 className={`${styles.deliveryTitle} ${styles.center} ${styles.white}`}>Minimum Sifariş</h3>
            <div className={`${styles.deliveryImage} ${styles.flex}`}>
              <Image src="/assets/icon/palletorder.svg" alt="Order Pallet Icon" width={154} height={146} />
              <p className={`${styles.palletText} ${styles.white}`}>1 Pallet</p>
            </div>
          </div>
          <div className={styles.articleDelivery}>
            <h3 className={`${styles.deliveryTitle} ${styles.center} ${styles.white}`}>Çatdırılma Seçimi</h3>
            <div className={`${styles.deliveryImage} ${styles.flex} ${styles.row}`}>
              <span className={`${styles.optionText} ${styles.white}`}>DAP</span>
              <span className={`${styles.optionText} ${styles.white}`}>EXW</span>
              <span className={`${styles.optionText} ${styles.white}`}>DDU</span>
              <span className={`${styles.optionText} ${styles.white}`}>DDP</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Order