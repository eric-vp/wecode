import { useState } from "react";

function ProdutosImg({src, alt, count, setCount, notify}) {
    const [favorite, setFavorite] = useState(false);
    const handleCLick = () => {
        favorite === false ? setFavorite(true) : setFavorite(false);
        console.log(favorite);
    }
    const adicionaAoCarrinho = () => {
        setCount(count + 1);
        console.log("adicionado ao carrinho");
        notify();
    }

    return (
        <>
            <div className="card-img" style={{backgroundImage: `url(${src})`}}>
                <i onClick={handleCLick} class={!favorite ? "fa-regular fa-heart heart" :   "fa-solid fa-heart heart"}></i>
                <i onClick={adicionaAoCarrinho} class="fa-solid fa-bag-shopping bag"></i>
            </div>
            {/* <ToastContainer /> */}
        </>
    )
}

export default ProdutosImg;