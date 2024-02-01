import Image from "next/image"
import brands from "@/public/assets/img/brands.png"
import styles from "./style.module.css"
import Request from "@/Components/Request"
const Import = () => {
  return (
    <main className={styles.mainimport}>
      <div className={`${styles.importItems} ${styles.import}`}>
        <div className="container">
          <h6 className={styles.importTitle}>İmport/Eksport</h6>
          <Image className={styles.importImage} src="/assets/icon/solid.png" alt="Border Solid" width={88} height={2} />
          <p className={`${styles.importText} ${styles.width}`}>Şirkətimizdə biz müştərilərə unikal dəyər təklifi təqdim etməyə çalışırıq: tanınmış və nüfuzlu məhsullar istehsalçılar və ya onların nümayəndələri tərəfindən təklif olunan qiymətlərdən aşağı qiymətlərlə. Əsas xidmətimiz FMCG kateqoriyasında müəyyən edilmiş brendlərin satışı ətrafında fırlanır.</p>
        </div>
      </div>
      <section className={`${styles.importSection} ${styles.import}`}>
        <div className="container">
          <div className={styles.sectionItems}>
            <h2 className={`${styles.importTitle} ${styles.padd}`}>İşlədiyimiz brendlər</h2>
            <p className={styles.importText}>Biz geniş çeşiddə məşhur məhsulları təklif edirik, o cümlədən:</p>
            <Image className={styles.sectionImage} src={brands} alt="Brands Icons" />
          </div>
        </div>
      </section>
      <article className={styles.importArticle} >
        <div className="container">
          <div className={`${styles.articleItems} ${styles.flex} ${styles.between}`}>
            <div className={styles.articleTexts}>
              <h2 className={styles.articleTitle}>Necə işləyirik?</h2>
              <div className={styles.articleTextCont}>
                <p className={`${styles.articleText} ${styles.width}`}>Müştəri məmnuniyyətinə güclü diqqət yetirməklə, biz yüksək keyfiyyətli FMCG markaları ilə əlaqəli keyfiyyət və tanınmadan ödün vermədən bizneslərə rəqabətli qiymətlərdən faydalanmağa imkan verən müstəsna dəyər təqdim etməyə çalışırıq.</p>
              </div>
            </div>
            <div className={styles.articleImage}>
              <Image src="/assets/img/palet.png" alt="Palet Image" width={520} height={520} />
            </div>
          </div>
          <div className={`${styles.orderContainer} ${styles.flex} ${styles.alignCenter}`}>
            <div className={styles.articleDelivery}>
              <h3 className={`${styles.deliveryTitle} ${styles.center}`}>Minimum Sifariş</h3>
              <div className={`${styles.deliveryImage} ${styles.flex}`}>
                <Image src="/assets/icon/palletorder.svg" alt="Order Pallet Icon" width={154} height={146} />
                <p className={styles.palletText}>1 Pallet</p>
              </div>
            </div>
            <div className={styles.articleDelivery}>
              <h3 className={`${styles.deliveryTitle} ${styles.center}`}>Çatdırılma Seçimi</h3>
              <div className={`${styles.deliveryImage} ${styles.flex} ${styles.row}`}>
                <span className={styles.optionText}>DAP</span>
                <span className={styles.optionText}>EXW</span>
                <span className={styles.optionText}>DDU</span>
                <span className={styles.optionText}>DDP</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Request />
    </main>
  )
}

export default Import