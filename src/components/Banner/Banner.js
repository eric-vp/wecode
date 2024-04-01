import banner1 from '../../assets/banner/banner-principal-1.png';
import banner2 from '../../assets/banner/banner-principal-2.png';
import banner3 from '../../assets/banner/banner-principal-3.png';
import './_banner.scss';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings} className='slider'>
                {banners.map(banner => {
                    return (
                        <div>
                            <img className='banner-img' src={banner['src']} alt={banner['alt']} />
                            <a href='/#' className='botao'>Conheça agora!</a>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
}

export default Banner;