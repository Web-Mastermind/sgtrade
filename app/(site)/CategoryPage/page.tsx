import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { SoftDrinkLinks } from "@/src/links/Links"

const CategoryPage = () => {
  return (
    <main className={styles.categoryPage}>
      <div className="container">
        <div className={styles.categoryItems}>
          <h2 className={styles.categoryTitle}>Sərinləşdirici içkilərin topdan satışı</h2>
          <div className={styles.productContainer}>
            <Image className={styles.testImageClass} src="/assets/img/test.png" alt="test" width={305} height={590} />
            {
              SoftDrinkLinks.map(({ id, imageSrc, alt, width, height, iconPlus, iconAlt, iconWidth, iconHeight, text }) => {
                return (
                  <div key={id} className={styles.productInfo}>
                    <Image src={imageSrc} alt={alt} width={width} height={height} />
                    <div className={styles.productAdd}>
                      <Link href="/"><Image src={iconPlus} alt={iconAlt} width={iconWidth} height={iconHeight} /></Link>
                      <p className={styles.productText}>{text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default CategoryPage
