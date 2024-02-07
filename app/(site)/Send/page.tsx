import Image from "next/image"
import styles from "./style.module.css"


const Send = () => {
  return (
    <main className={styles.mainSend}>
      <div className="container">
        <div className={styles.sendItems}>
          <h2 className={styles.sendTitle}>Təklif əldə <span className={styles.sendSpan}> edin</span></h2>
          <p className={styles.sendText}>Əlaqə formasını doldurun və bizə göndərin, tezliklə sizinlə əlaqə saxlayacağıq</p>
          <form className={styles.sendForm}>
            <input className={`${styles.sendInput} ${styles.colorBlack} ${styles.colorWhite}`} type="email" placeholder="Email" required />
            <input className={`${styles.sendInput} ${styles.colorBlack} ${styles.colorWhite}`} type="tel" placeholder="Telefon" required />
            <input className={`${styles.sendInput} ${styles.colorBlack} ${styles.colorWhite}`} type="text" placeholder="Şirkət" required />
            <textarea className={`${styles.sendTextArea} ${styles.colorBlack} ${styles.colorWhite}`} cols={49} rows={10} placeholder="Sorğunuzu qeyd edin" />
            <div className={styles.btnCase}>
              <button className={styles.sendBtn}><Image className={styles.sendBtnIcon} src="/assets/icon/sendblack.svg" alt="Send Icon" width={20} height={20} />Göndər</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Send