import React from 'react';
import "../../styles/HomePage.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import header1 from "../../images/home/header1.jpg";
import header2 from "../../images/home/header2.avif";
import header3 from "../../images/home/header3.webp";
import header4 from "../../images/home/header4.avif";

export default function HomeSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="homeSwiper"
      >
        <SwiperSlide>
            <image className='headerImage' style={{backgroundImage: `url(${header1})`}}></image>
        </SwiperSlide>

        <SwiperSlide>
            <image className='headerImage' style={{backgroundImage: `url(${header2})`}}></image>
        </SwiperSlide>

        <SwiperSlide>
            <image className='headerImage' style={{backgroundImage: `url(${header3})`}}></image>
        </SwiperSlide>

        <SwiperSlide>
            <image className='headerImage' style={{backgroundImage: `url(${header4})`}}></image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}