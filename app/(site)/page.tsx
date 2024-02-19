"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import styles from "./style.module.css"
import Link from 'next/link';
import Image from 'next/image';
import Products from '@/Components/Products';
import Request from '@/Components/Request';
import Quote from '@/Components/Quote';
import { SwiperLinks } from '@/src/links/Links';


const Home = () => {
  const [init, setInit] = useState(false)
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.sliderContainer}>
            <Swiper slidesPerView={1}
              onInit={() => {
                setInit(!init);
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}

              navigation={true} className={styles.swiper}>
              {
                SwiperLinks.map(({ id, title, span, text, img, slideImage }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className={`${styles.swiperItemsMain} ${styles.flex}`}>
                        <div className={styles.swiperItems}>
                          <h1 className={styles.mainTitle}>{title} <span className={styles.titleSpan}>{span}</span></h1>
                          <p className={styles.mainText}>{text}</p>
                          <Link className={styles.linkItems} href={"/"}><Image src={img} alt="Button icon" width={22} height={22} />İçkiləri araşdırın</Link>
                        </div>
                        <div className={styles.sliderImg}>
                          <Image className={`${styles.sliderImgItem} ${styles.flex}`} src={slideImage} alt="Coca-Cola image" width={530} height={490} />
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </main >
      <Products />
      <Quote />
      <Request />
    </>
  )
}

export default Home