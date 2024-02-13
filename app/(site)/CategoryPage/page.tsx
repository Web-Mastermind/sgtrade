import Image from "next/image"
import Link from "next/link"
import Request from "@/Components/Request"
import CustomizedAccordions from "@/Components/Accordion"
import axios from "axios"
import { product } from "@/src/Types/Interface"
import styles from "./style.module.css"



const url: string = process.env.NEXT_PUBLIC_PRODUCT || "";

const CategoryPage = async () => {
  const { data } = await axios.get(url)
  return (
    <>
      <main className={styles.categoryPage}>
        <div className="container">
          <div className={styles.categoryItems}>
            <h2 className={styles.categoryTitle}>Coca-Cola sərinləşdirici içkilərin topdan satışı</h2>
            <div className={styles.productContainer}>
              <CustomizedAccordions />
              <div className={styles.productInfoContainer}>
                {
                  data.map(({ id, imageSrc, alt, text }: product) => {
                    return (
                      <div key={id} className={styles.productInfo}>
                        <Image src={imageSrc} alt={alt} width={305} height={277} />
                        <div className={styles.productAdd}>
                          <Link href={`/CategoryPage/${id}`}><Image src="/assets/icon/plus.svg" alt="Buy Item Button" width={31} height={31} /></Link>
                          <p className={styles.productText}>{text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <h3 className={styles.marketingText}>Coca-Cola şirkəti sərinləşdirici içkilərin topdan satışı - bazarda ən yaxşı şərtlər</h3>
          <div className={styles.listItem}>
            <p className={styles.alcoholText}>Coca-Cola Alkoqolsuz İçkilər Kataloq səhifəmizə xoş gəlmisiniz, burada yüksək keyfiyyətli Coca-Cola içkilərinin müxtəlif seçimi var. Üstünlükləri kəşf edin:</p>
            <ul className={styles.alcoholList}>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>İkonik ləzzətlər: Sprite kimi təravətləndirici seçimlər və Fanta-nın meyvəli ləzzəti ilə yanaşı, Coca-Cola Original-ın əbədi dadından həzz alın.</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Müxtəlif dadlar: Klassik Coca-Cola Originaldan tutmuş ləzzətli Sprite və Fanta-nın meyvəli profillərinə qədər bir sıra ləzzətləri araşdırın.</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Çoxsaylı Ölçülər: Biznes ehtiyaclarınızı ödəmək üçün müxtəlif ölçülərdən, o cümlədən tək xidmət qutuları və daha böyük butulkalardan seçin.</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Müxtəlif qablaşdırma: Kataloqumuz bazar tələbləriniz üçün çeviklik təmin edən qutular, PET şüşələr və şüşə butulkalar kimi müxtəlif qablaşdırma variantları təklif edir.</p></li>
            </ul>
            <p className={styles.alcoholText}>Coca-Cola sərinləşdirici içkilərimiz, Sprite və Fanta ilə topdansatış təkliflərinizi artırın. Fərqli dadları, müxtəlif ölçüləri və müxtəlif qablaşdırma növləri ilə bu içkilər müştərilərinizin zövqünə uyğun olacaq.</p>
          </div>
        </div>
      </main>
      <Request />
    </>
  )
}

export default CategoryPage
