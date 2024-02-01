import Link from "next/link"
import styles from "./style.module.css"
import Image from "next/image"

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
            <Link className={styles.footerSocLinks} href="/"><Image src="/assets/icon/instagram.svg" alt="" width={20} height={20} /></Link>
            <Link className={styles.footerSocLinks} href="/"><Image src="/assets/icon/whatsapp.svg" alt="" width={20} height={20} /></Link>
            <Link className={styles.footerSocLinks} href="/"><Image src="/assets/icon/facebook.svg" alt="" width={20} height={20} /></Link>
            <Link className={styles.footerSocLinks} href="/"><Image src="/assets/icon/linkedin.svg" alt="" width={20} height={20} /></Link>
            <Link className={styles.footerSocLinks} href="/"><Image src="/assets/icon/viber.svg" alt="" width={20} height={20} /></Link>
          </div>
          <div className={styles.rightLinks}>
            <div className={styles.navLeft}>
              <Link className={styles.footerNavLinks} href="/"><Image className={styles.navIcons} src="/assets/icon/contacts.svg" alt="" width={20} height={20} />Əlaqə</Link>
              <Link className={styles.footerNavLinks} href="/"><Image className={styles.navIcons} src="/assets/icon/about.svg" alt="" width={20} height={20} />Haqqımızda</Link>
              <Link className={styles.footerNavLinks} href="impt"><Image className={styles.navIcons} src="/assets/icon/import.svg" alt="" width={20} height={20} />İmport/Eksport</Link>
              <Link className={styles.footerNavLinks} href="/"><Image className={styles.navIcons} src="/assets/icon/news.svg" alt="" width={20} height={20} />Xəbərlər</Link>
            </div>
            <div className={styles.navRight}>
              <Link className={styles.footerNavLinks} href="/Catalog"><Image className={styles.navIcons} src="/assets/icon/catalog.svg" alt="" width={20} height={20} />Kataloq</Link>
              <Link className={styles.footerNavRightLinks} href="/">İçkilər</Link>
              <Link className={styles.footerNavRightLinks} href="/">Şirniyyatlar</Link>
              <Link className={styles.footerNavRightLinks} href="/">Alkoqollu İçkilər</Link>
            </div>
          </div>
        </div>
        <p className={styles.Destiny}>Created By Destiny</p>
      </div>
    </footer>
  )
}

export default Footer