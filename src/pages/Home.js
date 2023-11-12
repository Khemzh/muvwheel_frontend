import homecss from './Home.module.css';
import React, { useState, useEffect } from 'react';
import { initMaps } from '../back/map_api';
import { useNavigate } from 'react-router-dom';

const PopupMenu = () => {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
    // const [val, setVal] = useState('ต้องการจะไปที่ไหน ?')

    const [listBus, listbus] = useState(<div className={homecss.showBus} onClick={() => click(mainbox)}>
        <div className={homecss.bus3}>
            <img className={homecss.bus} src="/img/icon _car outline_.png" alt=" " />
        </div>
        <ul>
            <ol>
                <div className={homecss.listOfBus} id='listOfStep'>
                    
                </div>

            </ol>
        </ul>



    </div>
    )
    const [mainbox, setmain] = useState(<div>
        <button className={homecss.busClick} onClick={() => click(listBus)}>
            <img className={homecss.bus1} src="/img/icon _car outline_.png" alt=" " /></button>

    </div>
    )

    const click = listBus => {
        setmain(listBus)
    }
    const click1 = mainbox => {
        setmain(mainbox)
    }


    return (
        <div className={homecss.App}>
            <div className={homecss.bg} >
                <div className={homecss.map} id='map'></div>
            </div>
            <div class={homecss.dp}>
                <button className={homecss.bbb} onClick={togglePopup}>
                    <img className={homecss.bt} src="/img/icon _menu_.png"></img>
                </button>
                {isPopupVisible && (
                    <div className={homecss.popup_menu}>
                        <ul>
                            <ol>
                                <div>
                                    <div className={homecss.pic}>
                                        <button className={homecss.back} onClick={togglePopup}><img className={homecss.bbb1} src="/img/leading-icon.png"></img></button>
                                        <img class={homecss.man} src="/img/disabled-guy.png"></img>
                                    </div>
                                    <button class={homecss.login}>เข้าสู่ระบบ</button>
                                </div>
                            </ol>

                        </ul>
                    </div>
                )}
                <div className={homecss.header}>
                    <input className={homecss.txt} id='searchBar' value='ต้องการจะไปที่ไหน ?' onClick={() => navigate('/destination')} />
                    {mainbox}
                </div>

            </div>

        </div>
    );
}


export default PopupMenu;