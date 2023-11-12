import destination2css from './Destination2.module.css';
import React, { useEffect, useState } from 'react';
function Destination2() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
    const [isPopupVisible2, setPopupVisible2] = useState(false);

    const togglePopup2 = () => {
        setPopupVisible2(!isPopupVisible2);
    };
    const [Close, setClose] = useState(true);

    const Closeclick = () => {
        setClose(!Close);
    };



    const close = () => {
        setClose(!close);

    };
    return (
        <div className={destination2css.App}>

            <div class={destination2css.bg}>
                <div class={destination2css.pathbox}>
                    <p><button class={destination2css.goback}>
                        <img class={destination2css.gb} src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class={destination2css.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destination2css.pu}><img class={destination2css.up} src="/picture/up.png"></img>
                        <input class={destination2css.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destination2css.df}><img class={destination2css.flag} src="/picture/flag.png"></img>
                        <input class={destination2css.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class={destination2css.lastsearch}><p class={destination2css.lstext}>ค้นหาล่าสุด</p>
                    <ul>
                        <ol>
                            {Close && (
                                <div>
                                    <button class={destination2css.ls}  >
                                        <button class={destination2css.close} onClick={Closeclick} ><img class={destination2css.c} src="/picture/icon-close-512 1.png"></img></button>
                                        <div class={destination2css.box}>
                                            {/* <button class={destination2css.star} onClick={togglePopup}>
                                    {!isPopupVisible &&(
                                         <img class={destination2css.starf} src="/picture/Star_fill.png"></img>
                                    )}
                                    {isPopupVisible && (<img class={destination2css.starf} src="/picture/Star_fill2.png"></img>)}
                                </button> */}
                                            <p class={destination2css.lastsearchpath}>สยามพารากอน</p></div>



                                    </button>
                                </div>

                            )}

                        </ol>
                    </ul>
                </div>
                <div class={destination2css.save}><p class={destination2css.savetext}>เส้นทางที่บันทึก</p>
                    <ul>
                        <ol>
                            
                            <button class={destination2css.s}>
                                <button class={destination2css.close}><img class={destination2css.c} src="/picture/icon-close-512 1.png"></img></button>
                                <div class={destination2css.box}><button class={destination2css.star} onClick={togglePopup2}>
                                    {!isPopupVisible2 && (

                                        <img class={destination2css.starf} src="/picture/Star_fill2.png"></img>
                                    )}
                                    {isPopupVisible2 && (<img class={destination2css.starf} src="/picture/Star_fill.png"></img>)}
                                </button>
                                    <p class={destination2css.savepath}>ม.เกษตร</p></div>
                            </button>
                        </ol>
                    </ul>
                </div>

                <button class={destination2css.search}>
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination2;