"use client"
import Link from "next/link"
import AOS from "aos";
import "aos/dist/aos.css";
import { CategoryLinks } from "@/src/links/Links"
import styles from "./style.module.css"
import { useEffect } from "react";

const Products = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
            {
              CategoryLinks.map(({ id, to, title, className, className2, className3 }) => {
                return (<Link data-aos="zoom-in" key={id} className={`${styles[className]} ${styles[className2]} ${styles[className3]}`} href={to}>{title}</Link>)
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Products