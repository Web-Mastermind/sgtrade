import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css"
import Request from "@/Components/Request";
import { prodDescription } from "@/src/Types/Interface";


const url: string = process.env.NEXT_PUBLIC_PRODUCT || "";
const Single = async ({ params }: any) => {
  const _id = +params.id;
  const { data } = await axios.get(url + _id)

  return (
    <>
      <main className={styles.singleMain}>
        <div className="container">
          <div className={styles.singleItems}>
            <h2 className={`${styles.singleTitle} ${styles.white}`}>{data.singleTitle}</h2>
            <div className={`${styles.singleImageItems} ${styles.flex}`}>
              <Image src={data.singleImage} alt="Coca Cola 0.33ml can Image" width={500} height={450} />
              <div className={styles.singleMainContainer}>
                <div className={`${styles.requestContainer} ${styles.flex}`}>
                  <p className={`${styles.singlesubText} ${styles.black}`}>Anbarda</p>
                  <div className={`${styles.requestLink} ${styles.bgBlack}`}>
                    <Image className={styles.requestImage} src="/assets/icon/requesticon.svg" alt="Send Request Icon" width={12} height={12} />
                    <Link className={`${styles.requestLinkItem} ${styles.white}`} href="/Send">Sorğu göndərin</Link>
                  </div>
                </div>
                <p className={styles.singleFeatures}>Xüsusiyyətləri</p>
                <div className={`${styles.featuresInfo} ${styles.flex} ${styles.bgBlack}`}>
                  <div className={styles.featuresInfoLeftContainer}>
                    {
                      data.prodDescription.map(({ id, icon, title, text }: prodDescription) => {
                        return (<div key={id} className={styles.map}>
                          <div className={`${styles.featuresInfoItems} ${styles.flex}`}>
                            <Image className={styles.featuresImageItem} src={icon} alt={title} width={16} height={18} />
                            <p className={styles.featuresTextItem}>{title}</p>
                          </div>
                          <p className={`${styles.featuresMainTextItem} ${styles.white}`}>{text}</p>
                        </div>)
                      })
                    }
                  </div>
                  <div className={styles.featuresInfoRightContainer}>
                    {
                      data.right.map(({ id, icon, title, text }: prodDescription) => {
                        return (<div key={id} className={styles.map}>
                          <div className={`${styles.featuresInfoItems} ${styles.flex}`}>
                            <Image className={styles.featuresImageItem} src={icon} alt={title} width={16} height={18} />
                            <p className={styles.featuresTextItem}>{title}</p>
                          </div>
                          <p className={`${styles.featuresMainTextItem} ${styles.white}`}>{text}</p>
                        </div>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
            <h2 className={`${styles.logisticTitle} ${styles.white}`}>Logistika</h2>
            <div className={`${styles.logisticContainer} ${styles.flex}`}>
              {
                data.bottom.map(({ id, title, text }: prodDescription) => {
                  return (<div key={id} className={styles.mapBottom}>
                    <div className={`${styles.logisticItems} ${styles.bgBlack}`}>
                      <p className={styles.logisticText}>{title}</p>
                      <p className={`${styles.logisticSecondText} ${styles.white}`}>{text}</p>
                    </div>
                  </div>)
                })
              }
            </div>
            <h3 className={`${styles.logisticTitle} ${styles.white}`}>Məhsul</h3>
            <p className={`${styles.productDesc} ${styles.white}`}>{data.productInfo}</p>
          </div>
        </div>
      </main>
      <Request />
    </>
  )
}

export default Single