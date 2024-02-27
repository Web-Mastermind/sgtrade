import { CarouseUpLinks } from '@/src/links/Links'
import styles from "./style.module.css"
import Image from 'next/image'

const Brands = () => {
  return (
    <section className={styles.sectionBrands}>
      <div className="container">
        <div className={styles.brandsItems}>
          <h2 className={`${styles.brandsTitle} ${styles.white}`}>İşlədiyimiz brendlər</h2>
          <p className={`${styles.brandsText} ${styles.white}`}>Biz geniş çeşiddə məşhur məhsulları təklif edirik, o cümlədən:</p>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {
            CarouseUpLinks.map(({ id, imageSrc, alt, width, height }) => {
              return (
                <div key={id} className={styles.slide}>
                  <Image className={styles.sliderImages} src={imageSrc} alt={alt} width={width} height={height} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Brands