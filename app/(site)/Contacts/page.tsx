import Link from "next/link"
import Image from "next/image"
import Subscribe from "@/Components/Subscribe"
import { SocialLinks } from "@/src/links/Links"
import styles from "./style.module.css"

const Contacts = () => {
  return (
    <>
      <main className={styles.mainContacts}>
        <div className="container">
          <div className={styles.contactsItems}>
            <h2 className={styles.contactsTitle}>Əlaqə</h2>
            <div className={styles.contactsContainer}>
              <div className={styles.contactsMain}>
                <div className={`${styles.contactsLink} ${styles.flex}`}>
                  <Link className={`${styles.contactsUpLinks} ${styles.phone} ${styles.flex}`} href="tel:+370 613 15 157"><Image className={styles.linkIcons} src="/assets/icon/phone.svg" alt="Phone icon" width={30} height={30} />+370 613 15 157</Link>
                  <Link className={`${styles.contactsUpLinks} ${styles.flex}`} href="mailto:info@sgtrade.lt"><Image className={styles.linkIcons} src="/assets/icon/mail.svg" alt="Phone icon" width={30} height={30} /> info@sgtrade.lt</Link>
                </div>
                <div className={`${styles.textItems} ${styles.flex}`}>
                  <div className={styles.contactsText}>
                    <p className={styles.leftTextItem} >Registry code:</p>
                    <p className={styles.leftTextItem} >VAT nr:</p>
                    <p className={styles.leftTextItem} >Address</p>
                  </div>
                  <div className={styles.contactsRightText}>
                    <p className={styles.rightTextItem} >305937503</p>
                    <p className={styles.rightTextItem} >LT100015566211</p>
                    <p className={`${styles.rightTextItem} ${styles.adress}`} >J.J Krasevskio st.7-1,Vilnius, LT-08118,Lithuania</p>
                  </div>
                  <div className={`${styles.contactsBarcode} ${styles.flex}`}>
                    {
                      SocialLinks.map(({ id, to, imageSrc, alt }) => {
                        return (<Link key={id} className={styles.contactsSocLinks} target="_blank" href={to}><Image className={styles.soclinksIcons} src={imageSrc} alt={alt} width={32} height={32} /></Link>)
                      })
                    }
                  </div>
                </div>
              </div>
              <iframe className={styles.iFrame} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2303.318891150493!2d25.301807444019197!3d54.73919448770669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1707131838499!5m2!1sru!2saz" width="680" height="283"></iframe>
            </div>
          </div>
        </div>
      </main>
      <Subscribe />
    </>
  )
}

export default Contacts