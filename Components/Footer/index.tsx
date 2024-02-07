import Link from "next/link"
import Image from "next/image"
import { SocialLinks } from "@/src/links/Links"
import { FooterLeftLinks } from "@/src/links/Links"
import { FooterRightLinks } from "@/src/links/Links"
import styles from "./style.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerItems}>
          <div className={styles.footerUpContainer}>
            <Link className={styles.footerUpLinks} href="mailto:info@sgtrade.lt">info@sgtrade.lt</Link>
            <Link className={`${styles.footerUpLinks} ${styles.phone}`} href="tel:+370 613 15 157">+370 613 15 157</Link>
            <div className={styles.textItems}>
              <div className={styles.footerText}>
                <p className={styles.leftTextItem} >Registry code:</p>
                <p className={styles.leftTextItem} >VAT nr:</p>
                <p className={styles.leftTextItem} >Address</p>
              </div>
              <div className={styles.footerRightText}>
                <p className={styles.rightTextItem} >305937503</p>
                <p className={styles.rightTextItem} >LT100015566211</p>
                <p className={`${styles.rightTextItem} ${styles.adress}`} >J.J Krasevskio st.7-1,Vilnius, LT-08118,Lithuania</p>
              </div>
            </div>
          </div>
          <div className={styles.footerBarcode}>
            <Image className={styles.barcodeImg} src="/assets/icon/barcode.png" alt="" width={156} height={60} />
            {
              SocialLinks.map(({ id, to, imageSrc, width, height, alt }) => {
                return (<Link className={styles.footerSocLinks} target="_blank" key={id} href={to}><Image src={imageSrc} alt={alt} width={width} height={height} /></Link>)
              })
            }
          </div>
          <div className={styles.rightLinks}>
            <div className={styles.navLeft}>
              {
                FooterLeftLinks.map(({ id, to, imageSrc, title, alt }) => {
                  return (<Link key={id} className={styles.footerNavLinks} href={to}><Image className={styles.navIcons} src={imageSrc} alt={alt} width={20} height={20} />{title}</Link>)
                })
              }
            </div>
            <div className={styles.navRight}>
              <Link className={styles.footerNavLinks} href="/Catalog"><Image className={styles.navIcons} src="/assets/icon/catalog.svg" alt="" width={20} height={20} />Kataloq</Link>
              {
                FooterRightLinks.map(({ id, to, title }) => {
                  return (<Link key={id} className={styles.footerNavRightLinks} href={to}>{title}</Link>)
                })
              }
            </div>
          </div>
        </div>
        <p className={styles.Destiny}>Created By Destiny</p>
      </div>
    </footer>
  )
}

export default Footer