import produto1 from "../../assets/produtos/produto-1.png";
import produto2 from "../../assets/produtos/produto-2.png";
import produto3 from "../../assets/produtos/produto-3.png";

import '../Produtos/_produtos.scss';
import ProdutosImg from "./ProdutosImg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Produtos({count, setCount, notify}) {
    const produtos = [
        {
            src: produto1,
            alt: "Scarpin vermelho com salto médio",
            descricao: "Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado",
            preco: "R$ 179,90"
        },
        {
            src: produto2,
            alt: "Coturno feminino tratorado",
            descricao: "Coturno Feminino Bebecê Tratorado Detalhe Tachas",
            preco: "R$ 315,00"
        },
        {
            src: produto3,
            alt: "Scarpin com salto alto e fivela",
            descricao: "Scarpin Bebecê Salto Alto Taça Com Fivela",
            preco: "R$ 159,90"
        }
    ]

    return (
        <section className="lancamentos">
            <h3 className="titulo">Lançamentos</h3>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
            >
                {produtos.map(produto => {
                    return (
                        <SwiperSlide className="slider">
                            <div className="card">
                                <ProdutosImg
                                    src={produto['src']}
                                    alt={produto['alt']}
                                    count={count}
                                    setCount={setCount}
                                    notify={notify}
                                    />
                                <a href="/#"><p className="card-descricao">{produto['descricao']}   </ p></a>
                                <p className="card-preco">{produto['preco']}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Produtos;