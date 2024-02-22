"use client"
import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"
import world from "@/public/assets/img/world.png"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"

const Request = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <section className={styles.sectionRequest}>
      <div className="container">
        <div className={styles.sectionItems}>
          <div data-aos="zoom-in" className={styles.mainItems}>
            <h5 className={`${styles.sectionTitle} ${styles.center}`}>Təklif əldə <span className={styles.sectionSpan} >edin!</span></h5>
            <Link className={`${styles.sectionLinks} ${styles.center}`} href="mailto:info@sgtrade.lt">info@sgtrade.lt</Link>
            <Link className={`${styles.sectionLinks} ${styles.phone} ${styles.center}`} href="tel:+370 613 15 157">+370 613 15 157</Link>
          </div>
          <div data-aos="flip-down" className={`${styles.sectionContacts} ${styles.center} ${styles.flex}`}>
            <Link className={`${styles.sectionContactsLinks} ${styles.contactLink} ${styles.flex}`} href="/Contacts"><Image className={styles.contactIcon} src="/assets/icon/book.svg" alt="Contact Icon" width={22} height={22} />Bütün kontaktlar</Link>
            <Link className={`${styles.sectionContactsLinks} ${styles.requestLink} ${styles.flex}`} href="/Send"><Image className={styles.contactIcon} src="/assets/icon/send.svg" alt="Contact Icon" width={22} height={22} />Sorğu göndərmək</Link>
          </div>
          <div className={styles.wroldItem}>
            <Image className={styles.contactWorld} src={world} alt="Earth Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Request