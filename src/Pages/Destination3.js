import destination3css from './Destination3.module.css';
function Destination3() {
    return (
        <div className={destination3css.App}>
            <div class={destination3css.bg}>
                <div class={destination3css.pathbox}>
                    <p><button class={destination3css.goback}>
                        <img src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class={destination3css.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destination3css.pu}><img class={destination3css.up} src="/picture/up.png"></img>
                        <input class={destination3css.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destination3css.df}><img class={destination3css.flag} src="/picture/flag.png"></img>
                        <input class={destination3css.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class={destination3css.lastsearch}>เร็วที่สุด
                    <button class={destination3css.ls}>

                        <img class={destination3css.starf} src="/picture/car.png"></img>
                        
                        <button class={destination3css.close}><img src="/picture/Vector.png"></img></button>

                        <p class={destination3css.lastsearchpath}>สาย34</p>



                    </button>
                </div>
                <div class={destination3css.save}>เปลี่ยนรถน้อยที่สุด
                    <div><button class={destination3css.s}>

                        <img class={destination3css.starf} src="/picture/car.png"></img>
                        
                        <button class={destination3css.close}><img src="/picture/Vector.png"></img></button>
                        <p class={destination3css.savepath}>สาย59</p>
                    </button></div>
                </div>

                <button class={destination3css.search}>
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination3;