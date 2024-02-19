import Image from "next/image"
import Link from "next/link"
import Request from "@/Components/Request"
import CustomizedAccordions from "@/Components/Accordion"
import axios from "axios"
import { product } from "@/src/Types/Interface"
import styles from "./style.module.css"



const url: string = process.env.NEXT_PUBLIC_CONFET || "";

const ConfetCategory = async () => {
  const { data } = await axios.get(url)
  return (
    <>
      <main className={styles.categoryPage}>
        <div className="container">
          <div className={styles.categoryItems}>
            <h2 className={`${styles.categoryTitle} ${styles.white}`}>Şirniyyatların topdan satışı</h2>
            <div className={`${styles.productContainer} ${styles.flex}`}>
              <CustomizedAccordions />
              <div className={`${styles.productInfoContainer} ${styles.flex}`}>
                {
                  data.map(({ id, imageSrc, alt, text }: product) => {
                    return (
                      <div key={id} className={styles.productInfo}>
                        <Image src={imageSrc} alt={alt} width={305} height={277} />
                        <div className={`${styles.productAdd} ${styles.flex}`}>
                          <Link href={`/ConfetCategory/${id}`}><Image className={styles.plusIcon} src="/assets/icon/plus.svg" alt="Buy Item Button" width={31} height={31} /></Link>
                          <p className={`${styles.productText} ${styles.white}`}>{text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <h3 className={`${styles.marketingText} ${styles.white}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti qui, at inventor</h3>
          <div className={styles.listItem}>
            <p className={styles.alcoholText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores vitae accusamus nesciunt labore, odio in nam rerum harum animi porro vel, excepturi cupiditate saepe beatae eos illum unde sapiente.</p>
            <ul className={styles.alcoholList}>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores vitae accusamus nesciunt labore, odio in nam rerum harum animi</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores vitae accusamus nesciunt labore, odio in nam rerum harum animi</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores vitae accusamus nesciunt labore, odio in nam rerum harum animi</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores vitae accusamus nesciunt labore, odio in nam rerum harum animi porro vel, excepturi cupiditate saepe beatae eos illum unde sapiente.</p></li>
            </ul>
            <p className={styles.alcoholText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam asperiores vitae accusamus nesciunt labore, odio in nam rerum harum animi porro vel, excepturi cupiditate saepe beatae eos illum unde sapiente.</p>
          </div>
        </div>
      </main>
      <Request />
    </>
  )
}

export default ConfetCategory
