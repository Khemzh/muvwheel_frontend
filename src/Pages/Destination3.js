import './Destination3.css';
function Destination3() {
    return (
        <div className="App">
            <div class="bg">
                <div class="pathbox">
                    <p><button class="goback">
                        <img class = "gb" src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class="findway">ค้นหาเส้นทาง</text></p>
                    <div class="pu"><img class="up" src="/picture/up.png"></img>
                        <input class="position" type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class="df"><img class="flag" src="/picture/flag.png"></img>
                        <input class="destination" type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class="lastsearch"><p class = "lstext">เร็วที่สุด</p>
                    <ul>
                        <ol>
                            <button class="ls">
                                <button class="vector"><img class = "v" src="/picture/Vector.png"></img></button>
                                <div class="box"><button class="car"><img class="carf" src="/picture/car.png"></img>
                                </button>
                                    <p class="lastsearchpath">สาย34</p></div>



                            </button>
                        </ol>
                    </ul>
                </div>
                <div class="save"><p class = "savetext">เปลี่ยนรถน้อยที่สุด</p>
                    <ul>
                        <ol>
                            <button class="s">
                                <button class="vector"><img class = "v" src="/picture/Vector.png"></img></button>
                                <div class="box"><button class="car"><img class="carf" src="/picture/car.png"></img>
                                </button>
                                    <p class="savepath">สาย59</p></div>
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
export default Destination3;