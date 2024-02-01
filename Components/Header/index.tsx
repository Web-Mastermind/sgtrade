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
          <div className={styles.burgerIcon} onClick={toggleBurgerMenu}>
            <Image src={!burgerMenuOpen ? "/assets/icon/menu.png" : "/assets/icon/menuclouse.svg"} alt="Menu icon" width={37} height={37} />
          </div>
        </div>
      </div>
      {burgerMenuOpen && (
        <nav className={styles.nav}>
          <div className="container">
            <ul className={styles.burgerList}>
              {
                NavLinks.map(({ id, to, title, imageSrc, alt, width, height }) => {
                  return (<Link className={` ${styles.navLinks} ${id === 1 ? styles.phone : id === 2 ? styles.mail : ""} `} href={to} key={id}>{imageSrc && <Image className={styles.linkIcons} src={imageSrc} alt={alt} width={width} height={height} />}{title}</Link>)
                })
              }
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header