import homecss from './Home.module.css';
import React, { useState, useEffect } from 'react';
import { initMap } from '../back/map_api';
import { useNavigate } from 'react-router-dom';
import App from './App.js';
import { getuser, setuser } from '../back/user_api';

const PopupMenu = () => {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isLogin, setLogin] = useState(false);

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
    const [loading, setLoading] = useState(false);

    function setupMenu() {
        if (getuser('isLogin')) {
            setLogin(true);
        }
    }
    useEffect(() => {
        const init = async () => {
            setLoading(true);
            await initMap();
            setupMenu()
        };
        init();
        setTimeout(() => {
            setLoading(false);
        }, 3500);

    }, []);

    return (
        <div className={homecss.App}>
            {loading ? <App /> : null}
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
                                        <button className={homecss.back} onClick={togglePopup} ><img className={homecss.bbb1} src="/img/leading-icon.png"></img></button>
                                        <img class={homecss.man} src="/img/disabled-guy.png"></img>
                                    </div>
                                    {isLogin ? (
                                        <button class={homecss.profile} onClick={() => { navigate('/user') }}>
                                            <img className={homecss.userimg} src="/picture/User image.png"></img>
                                            <p className={homecss.username}>{getuser("name")}&nbsp;&nbsp;&nbsp;{getuser("surname")}</p>
                                        </button>
                                    ) : (
                                        <button class={homecss.login} onClick={() => { navigate('/signin') }}>เข้าสู่ระบบ</button>
                                    )}
                                </div>
                            </ol>
                        </ul>
                    </div>
                )}
                <div className={homecss.header}>
                    <input className={homecss.txt} id='searchBar' value='ต้องการจะไปที่ไหน ?' onClick={() => { if (getuser('isLogin')) { navigate('/destination2') } else { navigate('/destination') } }} />
                    {mainbox}
                </div>

            </div>

        </div>
    );
}


export default PopupMenu;