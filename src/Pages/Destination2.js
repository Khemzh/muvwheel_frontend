import './Destination2.css';
function Destination2() {
    return (
        <div className="App">
            <div class="bg">
                <div class="pathbox">
                    <p><button class="goback">
                        <img src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class="findway">ค้นหาเส้นทาง</text></p>
                    <div class="pu"><img class="up" src="/picture/up.png"></img>
                        <input class="position" type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class="df"><img class="flag" src="/picture/flag.png"></img>
                        <input class="destination" type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class="lastsearch"><p class = "lstext">ค้นหาล่าสุด</p>
                    <ul>
                        <ol>
                            <button class="ls">
                                <button class="close"><img class = "c" src="/picture/icon-close-512 1.png"></img></button>
                                <div class="box"><button class="star"><img class="starf" src="/picture/Star_fill.png"></img>
                                </button>
                                    <p class="lastsearchpath">สยามพารากอน</p></div>



                            </button>
                        </ol>
                    </ul>
                </div>
                <div class="save"><p class = "savetext">เส้นทางที่บันทึก</p>
                    <ul>
                        <ol>
                            <button class="s">
                                <button class="close"><img class = "c" src="/picture/icon-close-512 1.png"></img></button>
                                <div class="box"><button class="star"><img class="starf" src="/picture/Star_fill.png"></img>
                                </button>
                                    <p class="savepath">ม.เกษตร</p></div>
                            </button>
                        </ol>
                    </ul>
                </div>

                <button class="search">
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination2;