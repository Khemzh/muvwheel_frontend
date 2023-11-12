import destination3css from'./Destination3.module.css';
function Destination3() {
    return (
        <div className={destination3css.App}>
            <div class={destination3css.bg}>
                <div class={destination3css.pathbox}>
                    <p><button class={destination3css.goback}>
                        <img class = {destination3css.gb} src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class={destination3css.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destination3css.pu}><img class={destination3css.up} src="/picture/up.png"></img>
                        <input class={destination3css.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destination3css.df}><img class={destination3css.flag} src="/picture/flag.png"></img>
                        <input class={destination3css.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class={destination3css.lastsearch}><p class = {destination3css.lstext}>เร็วที่สุด</p>
                    <ul>
                        <ol>
                            <button class={destination3css.ls}>
                                <button class={destination3css.vector}><img class = {destination3css.v} src="/picture/Vector.png"></img></button>
                                <div class={destination3css.box}><button class={destination3css.car}><img class={destination3css.carf} src="/picture/car.png"></img>
                                </button>
                                    <p class={destination3css.lastsearchpath}>สาย343</p></div>



                            </button>
                        </ol>
                    </ul>
                </div>
                <div class={destination3css.save}><p class = {destination3css.savetext}>เปลี่ยนรถน้อยที่สุด</p>
                    <ul>
                        <ol>
                            <button class={destination3css.s}>
                                <button class={destination3css.vector}><img class = {destination3css.v} src="/picture/Vector.png"></img></button>
                                <div class={destination3css.box}><button class={destination3css.car}><img class={destination3css.carf} src="/picture/car.png"></img>
                                </button>
                                    <p class={destination3css.savepath}>สาย59</p></div>
                            </button>
                        </ol>
                    </ul>
                </div>

                <button class={destination3css.search}>
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination3;