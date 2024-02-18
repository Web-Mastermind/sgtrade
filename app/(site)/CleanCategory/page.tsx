import Image from "next/image"
import Link from "next/link"
import Request from "@/Components/Request"
import CustomizedAccordions from "@/Components/Accordion"
import axios from "axios"
import { product } from "@/src/Types/Interface"
import styles from "./style.module.css"



const url: string = process.env.NEXT_PUBLIC_CLEAN || "";

const CleanCategory = async () => {
  const { data } = await axios.get(url)
  return (
    <>
      <main className={styles.categoryPage}>
        <div className="container">
          <div className={styles.categoryItems}>
            <h2 className={styles.categoryTitle}>Gigiyena & Təmizlik vasitələri</h2>
            <div className={styles.productContainer}>
              <CustomizedAccordions />
              <div className={styles.productInfoContainer}>
                {
                  data.map(({ id, imageSrc, alt, text }: product) => {
                    return (
                      <div key={id} className={styles.productInfo}>
                        <Image src={imageSrc} alt={alt} width={305} height={277} />
                        <div className={styles.productAdd}>
                          <Link href={`/CleanCategory/${id}`}><Image src="/assets/icon/plus.svg" alt="Buy Item Button" width={31} height={31} /></Link>
                          <p className={styles.productText}>{text}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <h3 className={styles.marketingText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti qui, at inventor</h3>
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

export default CleanCategory
