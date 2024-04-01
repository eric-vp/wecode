import banner1 from '../../assets/banner/banner-principal-1.png';
import banner2 from '../../assets/banner/banner-principal-2.png';
import banner3 from '../../assets/banner/banner-principal-3.png';
import './_banner.scss';
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Banner() {
    const banners = [
        {
            src: banner1,
            alt: "Modelo usando uma blusa preta, calça branca e salto preto"
        },
        {
            src: banner2,
            alt: "Modelo usando uma blusa branca, saia branca e salto preto"
        },
        {
            src: banner3,
            alt: "Par de saltos na cor preta"
        },
    ]
    return (
        <div className='slider-banner'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {banners.map(banner => {
                    return (
                        <SwiperSlide>
                            <div>
                                <img className='banner-img' src={banner['src']} alt={banner ['alt']} />
                                <a href='/#' className='botao'>Conheça agora!</a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Banner;