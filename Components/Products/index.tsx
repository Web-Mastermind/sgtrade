import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"

const Products = () => {
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectioItems}>
            <div className={styles.sectionTitles}>
              <h2 className={`${styles.sectioTitle} ${styles.white}`}>Məhsullar</h2>
              <p className={`${styles.sectionText} ${styles.white}`}>Biznes ehtiyaclarınıza cavab vermək üçün sizə müxtəlif çeşidlər təklif edən, birbaşa aparıcı istehsalçılardan alınan yüksək keyfiyyətli məhsulların seçilmiş seçimini araşdırın.</p>
            </div>
          </div>
          <div className={styles.sectionProducts}>
            <Link className={styles.productsLinks} href="/"><Image src="/assets/img/beverages.png" alt="Beverages Image" width={305} height={320} /></Link>
            <Link className={styles.productsLinks} href="/"><Image src="/assets/img/confectionarys.png" alt="Beverages Image" width={305} height={312} /></Link>
            <Link className={styles.productsLinks} href="/"><Image src="/assets/img/alchol.png" alt="Beverages Image" width={305} height={312} /></Link>
            <Link className={styles.productsLinks} href="/"><Image src="/assets/img/cosmetics.png" alt="Beverages Image" width={305} height={302} /></Link>
            <Link className={styles.productsLinks} href="/"><Image src="/assets/img/clean.png" alt="Beverages Image" width={305} height={312} /></Link>
          </div>
        </div>
      </section>

    </>
  )
}

export default Products