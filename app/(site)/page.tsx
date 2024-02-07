"use client"
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import styles from "./style.module.css"
import Link from 'next/link';
import Image from 'next/image';
import Products from '@/Components/Products';
import axios from 'axios';
import { swiper } from "@/src/Types/Interface"
import Request from '@/Components/Request';
import Quote from '@/Components/Quote';

const url: string = process.env.NEXT_PUBLIC_DATA || "";


const Home = async () => {
  const { data } = await axios.get(url)
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.sliderContainer}>
            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
              {
                data.map(({ id, title, span, text, img, slideImage }: swiper) => {
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