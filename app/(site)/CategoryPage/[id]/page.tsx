import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css"


const url: string = process.env.NEXT_PUBLIC_PRODUCT || "";
const Single = async ({ params }: any) => {
  const _id = +params.id;
  const { data } = await axios.get(url + _id)
  console.log(data);


  return (
    <main className={styles.singleMain}>
      <div className="container">
        <div className={styles.singleItems}>
          <h2 className={styles.singleTitle}>{data.singleTitle}</h2>
          <div className={styles.singleImageItems}>
            <Image src={data.singleImage} alt="Coca Cola 0.33ml can Image" width={500} height={450} />
            <div className={styles.ttteeesst}>
              <div className={styles.requestContainer}>
                <p className={styles.singlesubText}>Anbarda</p>
                <div className={styles.requestLink}>
                  <Image className={styles.requestImage} src="/assets/icon/requesticon.svg" alt="Send Request Icon" width={12} height={12} />
                  <Link className={`${styles.requestLinkItem} ${styles.white}`} href="/Send">Sorğu göndərin</Link>
                </div>
              </div>
              <p className={styles.singleFeatures}>Xüsusiyyətləri</p>
              <div className={styles.featuresInfo}>
                <div className={styles.featuresInfoItems}>
                  <Image className={styles.featuresImageItem} src="/assets/icon/volume.svg" alt="pcs Icon" width={16} height={18} />
                  <p className={styles.featuresTextItem} >1 pcs. Volume:</p>
                </div>
                <p className={styles.featuresMainTextItem}>{data.singleVolume}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Single