import './Destination.css';
function Destination() {
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
                <button class="search">
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination;