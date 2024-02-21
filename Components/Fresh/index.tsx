import Image from "next/image"
import styles from "./style.module.css"
import Request from "../Request"

const AboutSection = () => {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={`${styles.aboutItems} ${styles.flex} ${styles.between}`}>
            <div className={styles.aboutTexts}>
              <div className={styles.aboutTextCont}>
                <p className={`${styles.aboutText} ${styles.width}`}>Hazırda bizim əsas diqqətimiz FMCG (Sürətli İstehlak Malları) kateqoriyasında paralel idxal-ixrac sahəsindədir, qida məhsulları, içkilər, qəlyanaltılar və daha çox ixtisaslaşaraq, ilk növbədə topdansatış ticarəti ilə məşğul olur.</p>
                <p className={`${styles.aboutText}`}>Özümüzdə təravət, səmərəlilik və mükəmməllik prinsiplərini təcəssüm etdiririk. Yüksək keyfiyyətli məhsul və xidmətlərin təqdim edilməsinə dair öhdəliyimiz şüarımızda əks olunub:</p>
                <h2 className={styles.aboutTitle}>Yeni. Tez. Fantastik.</h2>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Image className={styles.colaSprite} src="/assets/img/colasprite.png" alt="Cola Image" width={458} height={458} />
            </div>
          </div>
          <div className={styles.operation}>
            <p className={styles.operationText}>Əməliyyatlarımız müxtəlif Avropa ölkələrini əhatə etməklə Litvanın hüdudlarından kənara çıxır. Biz bütün Avropadakı nüfuzlu pərakəndə satış şəbəkələri ilə güclü tərəfdaşlıq və müqavilə bağlamışıq.</p>
          </div>
        </div>
      </section>
      <Request />
    </>
  )
}

export default AboutSection