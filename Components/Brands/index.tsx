import Image from 'next/image'
import brands from "@/public/assets/img/brands.png"
import styles from "./style.module.css"

const Brands = () => {
  return (
    <section className={styles.sectionBrands}>
      <div className="container">
        <div className={styles.brandsItems}>
          <h2 className={styles.brandsTitle}>İşlədiyimiz brendlər</h2>
          <p className={styles.brandsText}>Biz geniş çeşiddə məşhur məhsulları təklif edirik, o cümlədən:</p>
          <Image className={styles.brandsImage} src={brands} alt="Brands Icons" />
        </div>
      </div>
    </section>
  )
}

export default Brands