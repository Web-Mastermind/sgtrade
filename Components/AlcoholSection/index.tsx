import Image from "next/image"
import styles from "./style.module.css"
import Subscribe from "../Subscribe"

const AlcoholSection = () => {
  return (
    <>
      <section className={styles.alcoholSection}>
        <div className="container">
          <div className={styles.alcoholCompany}>
            <h3 className={styles.alcoholTitle}>Coca-Cola şirkəti sərinləşdirici içkilərin topdan satışı - bazarda ən yaxşı şərtlər</h3>
            <p className={styles.alcoholText}>Coca-Cola Alkoqolsuz İçkilər Kataloq səhifəmizə xoş gəlmisiniz, burada yüksək keyfiyyətli Coca-Cola içkilərinin müxtəlif seçimi var. Üstünlükləri kəşf edin:</p>
            <ul className={styles.alcoholList}>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>İkonik ləzzətlər: Sprite kimi təravətləndirici seçimlər və Fanta-nın meyvəli ləzzəti ilə yanaşı, Coca-Cola Original-ın əbədi dadından həzz alın.</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Müxtəlif dadlar: Klassik Coca-Cola Originaldan tutmuş ləzzətli Sprite və Fanta-nın meyvəli profillərinə qədər bir sıra ləzzətləri araşdırın.</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Çoxsaylı Ölçülər: Biznes ehtiyaclarınızı ödəmək üçün müxtəlif ölçülərdən, o cümlədən tək xidmət qutuları və daha böyük butulkalardan seçin.</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Müxtəlif qablaşdırma: Kataloqumuz bazar tələbləriniz üçün çeviklik təmin edən qutular, PET şüşələr və şüşə butulkalar kimi müxtəlif qablaşdırma variantları təklif edir.</p></li>
            </ul>
            <p className={styles.alcoholText}>Coca-Cola sərinləşdirici içkilərimiz, Sprite və Fanta ilə topdansatış təkliflərinizi artırın. Fərqli dadları, müxtəlif ölçüləri və müxtəlif qablaşdırma növləri ilə bu içkilər müştərilərinizin zövqünə uyğun olacaq.</p>
            <Image className={styles.alcoholImage} src="/assets/img/jagermeister.png" alt="jagermeister image" width={630} height={355} />
            <p className={styles.alcoholTextEnd}>Coca-Cola sərinləşdirici içkilərimiz, Sprite və Fanta ilə topdansatış təkliflərinizi artırın. Fərqli dadları, müxtəlif ölçüləri və müxtəlif qablaşdırma növləri ilə bu içkilər müştərilərinizin zövqünə uyğun olacaq.</p>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  )
}

export default AlcoholSection