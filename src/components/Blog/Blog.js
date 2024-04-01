import Slider from "react-slick";
import blog1 from "../../assets/blog/blog-1.png";
import blog2 from "../../assets/blog/blog-2.png";
import blog3 from "../../assets/blog/blog-3.png";

import '../Blog/_blog.scss';

function Blog() {
    const cardsBlog = [
        {
            src: blog1,
            alt: "Sapatos femininos",
            titulo: "NOVO LOGO, MESMA ESSÊNCIA.",
            paragrafo: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!"
        },
        {
            src: blog2,
            alt: "Banner com a mensagem: Be simple, be true",
            titulo: "É AMANHÃ",
            paragrafo: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️"
        },
        {
            src: blog3,
            alt: "Mule dourado",
            titulo: "DESCUBRA O GLAMOUR EM CADA PASSO",
            paragrafo: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨"
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="blog">
            <h3 className="titulo">Conheça mais</h3>
            <p className="texto">Fique por dentro de tudo que acontece na Bebecê.</p>
            <Slider {...settings} className="slider">
                {cardsBlog.map(card => {
                    return(<div className="card">
                        <a href="/#"><img className='card-img' src={card['src']} alt={card['alt']} /></a>
                        <h4 className="card-titulo">{card['titulo']}</h4>
                        <p className="card-paragrafo">{card['paragrafo']}</p>
                        <a href="/#">Saiba mais!</a>
                    </div>)
                })}
            </Slider>
        </section>
    )
}

export default Blog;