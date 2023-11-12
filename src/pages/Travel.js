import travelcss from './Travel.module.css';
import React, { useState, useEffect } from 'react';
import { initMaps } from '../back/map_api';
import { useNavigate } from 'react-router-dom';

const PopupMenu = () => {
    const navigate = useNavigate();


    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const [unreach, setunreach] = useState(
    <div>
      <div className={travelcss.final} onClick={() => click(reach)} >
                <div className={travelcss.signBox}>
                  <p className={travelcss.sai}>33</p>
                  <p className={travelcss.st}>หอพักนิสิตจุฬา</p>
                  <p className={travelcss.cntTime}>อีก 5 นาที</p>
                </div>
              </div>
      </div>
  )

  const [reach, setreach] = useState(
  <div className={travelcss.final1} onClick={() => click(unreach)} >
    <div className={travelcss.signBox1}>
      <p className={travelcss.sai1}>33</p>
      <p className={travelcss.st1}>หอพักนิสิตจุฬา</p>
      <p className={travelcss.cntTime1}>อีก 5 นาที</p>
    </div>
  </div>

  )


    const [listBus, listbus] = useState(<div className={travelcss.showBus} onClick={() => click(listBus)}>
        <div className={travelcss.bus3}>
           <p className={travelcss.bus}>
                หอพักนิสิตจุฬา
           </p>
        </div>
        <ul>
        <ol>
          <div>
            <div className={travelcss.showBox}>
              <div className={travelcss.cntSign}>46ป้าย</div>
              <div>
                {unreach}

                <button className={travelcss.btn}> สิ้นสุดการเดินทาง </button>
              </div>
            </div>
          </div>
        </ol>
      </ul>

    </div>
    )
    const [mainbox, setmain] = useState(<div>
        <button className={travelcss.busClick} onClick={() => click(listBus)}>
            <p className={travelcss.bus1} >
                หอพักนิสิตจุฬา
            </p>
        </button>
        

    </div>
    )



    const click = listBus => {
        setmain(listBus)
    }
    const click1 = mainbox => {
        setmain(mainbox)
    }

    const click2 = reach => {
      setmain(reach)
  }
  const click3 = unreach => {
      setmain(unreach)
  }



    return (
        <div className={travelcss.App}>
            <div className={travelcss.bg} >
                <div className={travelcss.map} id='map'></div>
            </div>
            <div class={travelcss.dp}>
                <button className={travelcss.bbb} onClick={togglePopup}>
                    <img className={travelcss.bt} src="/img/icon _menu_.png"></img>
                </button>
                {isPopupVisible && (
                    <div className={travelcss.popup_menu}>
                        <ul>
                            <ol>
                                <div>
                                    <div className={travelcss.pic}>
                                        <button className={travelcss.back} onClick={togglePopup} ><img className={travelcss.bbb1} src="/img/leading-icon.png"></img></button>
                                        <img class={travelcss.man} src="/img/disabled-guy.png"></img>
                                    </div>
                                    <button class={travelcss.login}>เข้าสู่ระบบ</button>
                                </div>
                            </ol>
                        </ul>
                    </div>
                )}
                <div className={travelcss.header}>
                    {mainbox}
                </div>

            </div>
            
        </div>
    );
}


export default PopupMenu;