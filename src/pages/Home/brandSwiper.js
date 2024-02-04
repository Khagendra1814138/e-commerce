import React from "react";
import {useNavigate} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';



import { BrandsArray } from "./brandsArray";

export const ShopByBrand = () => {
    const navigate = useNavigate();

    return(
        <div>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={4}
                loop={true}
                autoplay={{delay: 3500, disableOnInteraction: true}}
                scrollbar={{hide: false,}}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, Scrollbar]}
                className="brandSwiper"
            >
                {BrandsArray.map((brands) => {
                    return(
                        <SwiperSlide key={brands.id}>
                        <div className="swiperContainer">
                            <button className='brandPage' onClick={() => navigate(brands.link)} style={{backgroundImage: `url(${brands.logo})`}}></button>
                        </div>
                    </SwiperSlide>
                    )
                   
                  
                })}
                {/* <SwiperSlide>
                    <div className="swiperContainer">
                        <button className='brandPage' onClick={() => navigate("/NikeProducts")} style={{backgroundImage: `url(${NikeLogo})`}}></button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiperContainer">
                        <button className='brandPage' onClick={() => navigate("/PumaProducts")} style={{backgroundImage: `url(${PumaLogo})`}}></button>
                    </div>
                </SwiperSlide> */}

            </Swiper>
        </div>
    );
};