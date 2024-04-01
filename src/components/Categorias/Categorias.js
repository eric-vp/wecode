import Slider from "react-slick";
import botas from '../../assets/categorias/banner-botas.png';
import sandalias from '../../assets/categorias/banner-sandalias.png';
import sapatilhas from '../../assets/categorias/banner-sapatilhas.png';
import scarpins from '../../assets/categorias/banner-scarpins.png';

import '../Categorias/_categorias.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <section className="categorias">
            <h3 className="titulo">Categorias</h3>
            <Slider {...settings} className="slider">
                {cardsCategorias.map(card => {
                    return (<div className="card">
                        <a href="/#">
                            <img className='card-img' src={card['src']} alt={card['alt']} />
                            <h4>{card['titulo']}</h4>
                        </a>
                    </div>)
                })}
            </Slider>
        </section>
    )
}

export default Categorias;