import Image from "next/image"
import styles from "./style.module.css"
import Subscribe from "../Subscribe"

const AlcoholSection = () => {
  return (
    <>
      <section className={styles.alcoholSection}>
        <div className="container">
          <div className={styles.alcoholCompany}>
            <h3 className={styles.alcoholTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias possimus quasi</h3>
            <p className={styles.alcoholText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis culpa nulla quis saepe. Quo nostrum suscipit in ipsum aliquam exercitation</p>
            <ul className={styles.alcoholList}>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis culpa nulla quis saepe. Quo nostrum suscipit in ipsum aliquam</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis culpa nulla quis saepe. Quo nostrum suscipit in ipsum aliquam</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis culpa nulla quis saepe. Quo nostrum suscipit in ipsum aliquam</p></li>
              <li className={styles.alcoholListItems}><p className={`${styles.alcoholText} ${styles.listText}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis culpa nulla quis saepe. Quo nostrum suscipit in ipsum aliquam</p></li>
            </ul>
            <p className={styles.alcoholText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto illum iusto deleniti temporibus voluptatibus officia quaerat, doloremque quo eligendi voluptatem eveniet quibusdam non esse aspernatur? Eius doloribus iste nemo.</p>
            <Image className={styles.alcoholImage} src="/assets/img/jagermeister.png" alt="jagermeister image" width={630} height={355} />
            <p className={styles.alcoholTextEnd}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus reiciendis culpa nulla quis saepe. Quo nostrum suscipit in ipsum aliquam culpa nulla quis saepe. Quo nostrum suscipit in ipsum</p>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  )
}

export default AlcoholSection