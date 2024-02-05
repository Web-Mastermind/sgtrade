"use client"
import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { useState } from "react"
import { NavLinks } from "@/src/links/Links"

const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={`${styles.headerItems} ${styles.flex}`}>
          <div className={`${styles.headerList} ${styles.flex}`}>
            <Image className={styles.listIcon} src="/assets/icon/list.svg" alt="list icon" width={22} height={22} />
            <p className={styles.listText}>Sitat əldə edin</p>
          </div>
          <Link href="/"><Image src="/assets/icon/barcode.png" alt="Barcode icon" width={156} height={60} /></Link>
          <div className={styles.burgerIcon}>
            <input type="checkbox" role="button" aria-label="Display the menu" className={styles.menu} onClick={toggleBurgerMenu} />
          </div>
        </div>
      </div>

      <nav className={`${styles.nav} ${burgerMenuOpen ? styles.showMenu : ''}`}>
        {
          NavLinks.map(({ id, to, title, imageSrc, alt, width, height }) => {
            return (<Link className={styles.navLinks} href={to} key={id}>{imageSrc && <Image className={styles.linkIcons} src={imageSrc} alt={alt} width={width} height={height} />}{title}</Link>)
          })
        }
      </nav>
    </header >
  )
}

export default Header