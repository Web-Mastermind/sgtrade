import Image from "next/image"
import styles from "./style.module.css"


const Send = () => {
  return (
    <main className={styles.mainSend}>
      <div className="container">
        <div className={styles.sendItems}>
          <h2 className={`${styles.sendTitle} ${styles.white}`}>Təklif əldə <span className={styles.sendSpan}> edin</span></h2>
          <p className={styles.sendText}>Əlaqə formasını doldurun və bizə göndərin, tezliklə sizinlə əlaqə saxlayacağıq</p>
          <form className={styles.sendForm} action="https://getform.io/f/68f52048-e379-44ba-91d0-67dd3e8261d2" method="POST">
            <input className={`${styles.sendInput} ${styles.colorBlack} ${styles.borderWhite} ${styles.white}`} type="email" name="email" placeholder="Email" required />
            <input className={`${styles.sendInput} ${styles.colorBlack} ${styles.borderWhite} ${styles.white}`} type="tel" name="tel" placeholder="Telefon" required />
            <input className={`${styles.sendInput} ${styles.colorBlack} ${styles.borderWhite} ${styles.white}`} type="text" name="text" placeholder="Şirkət" required />
            <textarea className={`${styles.sendTextArea} ${styles.colorBlack} ${styles.borderWhite} ${styles.white}`} cols={49} rows={10} placeholder="Sorğunuzu qeyd edin" />
            <div className={`${styles.btnCase} ${styles.flex}`}>
              <button className={`${styles.sendBtn} ${styles.flex}`}><Image className={styles.sendBtnIcon} src="/assets/icon/sendblack.svg" alt="Send Icon" width={20} height={20} />Göndər</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Send