"use client"
import Link from "next/link"
import AOS from "aos";
import "aos/dist/aos.css";
import { CategoryLinks } from "@/src/links/Links"
import styles from "./style.module.css"
import Image from "next/image";
import { useEffect } from "react";

const Products = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectioItems}>
          <div className={`${styles.sectionTitles} ${styles.flex}`}>
            <h2 data-aos="fade-right" className={`${styles.sectioTitle} ${styles.white}`}>Məhsullar</h2>
            <p data-aos="fade-left" className={`${styles.sectionText} ${styles.white}`}>Biznes ehtiyaclarınıza cavab vermək üçün sizə müxtəlif çeşidlər təklif edən, birbaşa aparıcı istehsalçılardan alınan yüksək keyfiyyətli məhsulların seçilmiş seçimini araşdırın.</p>
          </div>
        </div>
        <div className={`${styles.sectionProducts} ${styles.flex}`}>
          {
            CategoryLinks.map(({ id, to, title, imageSrc, alt }) => {
              return (<div key={id} className={styles.productLinkItems}>
                <Image data-aos="zoom-out" src={imageSrc} alt="Beverages Image" width={305} height={312} />
                <div className={`${styles.productBrowse} ${styles.flex}`}>
                  <Link className={`${styles.browse} ${styles.flex}`} href={to}><Image className={styles.plus} src="assets/icon/plus.svg" alt={alt} width={25} height={25} />{title}</Link>
                </div>
              </div>)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products