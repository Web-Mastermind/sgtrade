import Image from "next/image"
import styles from "./style.module.css"

const About = () => {
  return (
    <main className={styles.aboutMain}>
      <div className={styles.aboutItems}>
        <div className="container">
          <h2 className={`${styles.aboutTitle} ${styles.white}`}>Haqqımızda</h2>
          <Image className={styles.aboutImage} src="/assets/icon/solid.png" alt="Border Solid" width={88} height={2} />
          <p className={`${styles.aboutText} ${styles.width} ${styles.color} ${styles.white}`}>2021-ci ildə Şərqi Avropa içki sektorunda özəl etiket istehsal xətti yaratmaq məqsədi ilə qurulan şirkətimiz 2022-ci ildə baş verən qlobal hadisələrlə əlaqədar uğursuzluqlar yaşadı. Bununla belə, 2023-cü ilin yanvarında biz hərtərəfli yenidən qiymətləndirmədən keçdik və dəyişən şəraitə uğurla uyğunlaşdıq.</p>
        </div>
      </div>
    </main>
  )
}

export default About