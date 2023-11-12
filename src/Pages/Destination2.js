import destination2css from './Destination2.module.css';
function Destination2() {
    return (
        <div className={destination2css.App}>
            <div class={destination2css.bg}>
                <div class={destination2css.pathbox}>
                    <p><button class={destination2css.goback}>
                        <img src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class={destination2css.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destination2css.pu}><img class={destination2css.up} src="/picture/up.png"></img>
                        <input class={destination2css.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destination2css.df}><img class={destination2css.flag} src="/picture/flag.png"></img>
                        <input class={destination2css.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class={destination2css.lastsearch}>ค้นหาล่าสุด
                    <ul>
                        <ol>
                            <button class={destination2css.ls}>
                                <button class={destination2css.close}><img src="/picture/icon-close-512 1.png"></img></button>
                                <div class={destination2css.box}><button class={destination2css.star}><img class={destination2css.starf} src="/picture/Star_fill.png"></img>
                                </button>
                                    <p class={destination2css.lastsearchpath}>สยามพารากอน</p></div>



                            </button>
                        </ol>
                    </ul>
                </div>
                <div class={destination2css.save}>เส้นทางที่บันทึก
                    <ul>
                        <li>
                            <button class={destination2css.s}>
                                <button class={destination2css.close}><img src="/picture/icon-close-512 1.png"></img></button>
                                <div class={destination2css.box}><button class={destination2css.star}><img class={destination2css.starf} src="/picture/Star_fill.png"></img>
                                </button>
                                    <p class={destination2css.savepath}>ม.เกษตร</p></div>
                            </button>
                        </li>
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