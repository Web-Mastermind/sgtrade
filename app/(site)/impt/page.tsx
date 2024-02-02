import Image from "next/image"
import Request from "@/Components/Request"
import Brands from "@/Components/Brands"
import Order from "@/Components/Order"
import styles from "./style.module.css"
const Import = () => {
  return (
    <>
      <main className={styles.mainimport}>
        <div className={`${styles.importItems} ${styles.import}`}>
          <div className="container">
            <h6 className={styles.importTitle}>İmport/Eksport</h6>
            <Image className={styles.importImage} src="/assets/icon/solid.png" alt="Border Solid" width={88} height={2} />
            <p className={`${styles.importText} ${styles.width}`}>Şirkətimizdə biz müştərilərə unikal dəyər təklifi təqdim etməyə çalışırıq: tanınmış və nüfuzlu məhsullar istehsalçılar və ya onların nümayəndələri tərəfindən təklif olunan qiymətlərdən aşağı qiymətlərlə. Əsas xidmətimiz FMCG kateqoriyasında müəyyən edilmiş brendlərin satışı ətrafında fırlanır.</p>
          </div>
        </div>
        <Brands />
        <Order />
        <Request />
      </main>
    </>
  )
}

export default Import