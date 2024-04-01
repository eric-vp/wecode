import { useState } from "react";

function ItemMenu({titulo}) {
    const [click, setClick] = useState(false);
    return (
        <>
            <a href='/#' className='menu-item' onClick={() => {
                setClick(!click);
            }}>
                <li>{titulo}</li>
                <i className={!click ? "fa-solid fa-chevron-right" : "fa-solid fa-chevron-down"}    ></i>
            </a>
            <ul className={!click ? 'categoria-hidden' : 'categoria'}>
                <li className={'sapatos'}>Scarpins</li>
                <li className={'sapatos'}>Mocassim</li>
                <li className={'sapatos'}>Sapatilhas</li>
                <li className={'sapatos'}>Mules</li>
                <li className={'sapatos'}>Peep Toe</li>
                <li className={'sapatos'}>Oxford</li>
            </ul>
        </>
    )
}

export default ItemMenu;