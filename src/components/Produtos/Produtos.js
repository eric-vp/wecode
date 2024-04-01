import '../Produtos/_produtos.scss';
import ProdutosImg from "./ProdutosImg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { getProducts } from "../../utils";
import { useEffect, useState } from "react";

function Produtos({count, setCount, notify}) {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtos = await getProducts();
                setLista(produtos);                
            } catch (error) {
                console.log(error);
            }
        };
        fetchProdutos();
    }, []);

    return (
        <section className="lancamentos">
            <h3 className="titulo">Lançamentos</h3>
            <Swiper
                spaceBetween={0}
                slidesPerView={2}
                loop={true}
            >
                {lista.map(produto => {
                    const preco = produto['price']['amount'];
                    const precoDesconto = produto['price']['isDiscount'];

                    return (
                        <SwiperSlide className="slider">
                            <div className="card">
                                <ProdutosImg
                                    src={produto['image']}
                                    alt={produto['alt']}
                                    count={count}
                                    setCount={setCount}
                                    notify={notify}
                                    desconto={precoDesconto}
                                    />
                                <a href="/#"><p className="card-descricao">{produto['name']}</ p></a>
                                <p className={precoDesconto === null ? "" : "card-preco-desconto"}>
                                    {precoDesconto === null ?
                                    `` :
                                    `R$ ${preco.toFixed(2)}`}
                                </p>
                                <p className="card-preco">
                                    {produto['price']['isDiscount'] === null ?
                                    `R$ ${preco.toFixed(2)}` :
                                    `R$ ${precoDesconto.toFixed(2)}`}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Produtos;