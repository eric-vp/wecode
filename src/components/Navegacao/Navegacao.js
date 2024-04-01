import bannerPequeno from '../../assets/navegacao/banner-pequeno.png';
import bannerGrande from '../../assets/navegacao/banner-grande.png';

import '../Navegacao/_navegacao.scss';

function Navegacao() {
    const banners = [
        {
            src: bannerPequeno,
            alt: "Banner com a mensagem: Be simple, be true"
        },
        {
            src: bannerGrande,
            alt: "Modelo apoiada na parede enquanto ajusta o salto"
        }
    ]

    return (
        <>
            {banners.map(banner => {
                return(
                    <img className={'navegacao-banner'} src={banner['src']} alt={banner['alt']}/>
                )
            })}
        </>
    )
}

export default Navegacao;