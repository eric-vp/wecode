import botas from '../../assets/categorias/banner-botas.png';
import sandalias from '../../assets/categorias/banner-sandalias.png';
import sapatilhas from '../../assets/categorias/banner-sapatilhas.png';
import scarpins from '../../assets/categorias/banner-scarpins.png';

import '../Categorias/_categorias.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Categorias() {
    const cardsCategorias = [
        {
            src: botas,
            alt: "Par de botas",
            titulo: "Botas"
        },
        {
            src: scarpins,
            alt: "Par de scarpins",
            titulo: "Scarpins"
        },
        {
            src: sapatilhas,
            alt: "Par de sapatilhas",
            titulo: "Sapatilhas"
        },
        {
            src: sandalias,
            alt: "Par de sandalias",
            titulo: "Sandalias"
        }
    ]

    return (
        <section className="categorias">
            <h3 className="titulo">Categorias</h3>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                loop={true}
            >
                {cardsCategorias.map(card => {
                    return (
                        <SwiperSlide className='slider'>
                            <div className="card">
                                <a href="/#">
                                    <img className='card-img' src={card['src']} alt={card['alt']} />
                                    <h4>{card['titulo']}</h4>
                                </a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Categorias;