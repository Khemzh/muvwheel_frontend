import './Destination3.css';
function Destination3() {
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
                <div class="lastsearch">เร็วที่สุด
                    <button class="ls">

                        <img class="starf" src="/picture/car.png"></img>
                        
                        <button class="close"><img src="/picture/Vector.png"></img></button>

                        <p class="lastsearchpath">สาย34</p>



                    </button>
                </div>
                <div class="save">เปลี่ยนรถน้อยที่สุด
                    <div><button class="s">

                        <img class="starf" src="/picture/car.png"></img>
                        
                        <button class="close"><img src="/picture/Vector.png"></img></button>
                        <p class="savepath">สาย59</p>
                    </button></div>
                </div>

                <button class="search">
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination3;