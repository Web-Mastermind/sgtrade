import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css"
import Request from "@/Components/Request";



const url: string = process.env.NEXT_PUBLIC_PRODUCT || "";
const Single = async ({ params }: any) => {
  const _id = +params.id;
  const { data } = await axios.get(url + _id)

  return (
    <>
      <main className={styles.singleMain}>
        <div className="container">
          <div className={styles.singleItems}>
            <h2 className={styles.singleTitle}>{data.singleTitle}</h2>
            <div className={styles.singleImageItems}>
              <Image src={data.singleImage} alt="Coca Cola 0.33ml can Image" width={500} height={450} />
              <div className={styles.singleMainContainer}>
                <div className={styles.requestContainer}>
                  <p className={styles.singlesubText}>Anbarda</p>
                  <div className={styles.requestLink}>
                    <Image className={styles.requestImage} src="/assets/icon/requesticon.svg" alt="Send Request Icon" width={12} height={12} />
                    <Link className={`${styles.requestLinkItem} ${styles.white}`} href="/Send">Sorğu göndərin</Link>
                  </div>
                </div>
                <p className={styles.singleFeatures}>Xüsusiyyətləri</p>
                <div className={styles.featuresInfo}>
                  <div className={styles.featuresInfoLeftContainer}>

                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/volume.svg" alt="pcs icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >1 ədədin həcmi:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singleVolume}</p>

                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/packaging.svg" alt="pcs icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >Qablaşdırma:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singlePackaging}</p>
                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/netto.svg" alt="netto weight icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >Xalis çəkisi:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singleNetto}</p>
                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/brutto.svg" alt="brutto weight icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >Brutto çəkisi:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singleBrutto}</p>

                  </div>
                  <div className={styles.featuresInfoRightContainer}>
                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/delivery.svg" alt="pcs Icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >Çatdırılma vaxtı:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singleDelivery}</p>
                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/order.svg" alt="pcs Icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >Minimal sifariş:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singleOrder}</p>
                    <div className={styles.featuresInfoItems}>
                      <Image className={styles.featuresImageItem} src="/assets/icon/barcode.svg" alt="pcs Icon" width={16} height={18} />
                      <p className={styles.featuresTextItem} >Barkod:</p>
                    </div>
                    <p className={styles.featuresMainTextItem}>{data.singleBarcode}</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className={styles.logisticTitle}>Logistika</h2>
            <div className={styles.logisticContainer}>
              <div className={styles.logisticItems}>
                <p className={styles.logisticText}>Ədəd / Yük maşını</p>
                <p className={styles.logisticSecondText}>{data.singleTruck}</p>
              </div>
              <div className={styles.logisticItems}>
                <p className={styles.logisticText}>Pallet / Yük maşını</p>
                <p className={styles.logisticSecondText}>{data.singlePallet}</p>
              </div>
              <div className={styles.logisticItems}>
                <p className={styles.logisticText}>Ümumi miq / qutular / yük maşını</p>
                <p className={styles.logisticSecondText}>{data.singleTotal}</p>
              </div>
              <div className={styles.logisticItems}>
                <p className={styles.logisticText}>Ümumi çəki, kq</p>
                <p className={styles.logisticSecondText}>{data.singleGross}</p>
              </div>
            </div>
            <h3 className={styles.logisticTitle}>Məhsul</h3>
            <p className={styles.productDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident rerum dolorum laborum blanditiis totam inventore magni, dignissimos vero quaerat minima vel quam voluptas facere sunt corporis atque nihil deserunt recusandae.
              Dolorem eligendi, quod voluptas itaque quibusdam earum explicabo reprehenderit quidem neque incidunt blanditiis aliquam, obcaecati asperiores accusantium, harum animi quo perspiciatis error quas repellendus. Nihil illum enim laboriosam facilis ipsum?</p>
          </div>
        </div>
      </main>
      <Request />
    </>
  )
}

export default Single