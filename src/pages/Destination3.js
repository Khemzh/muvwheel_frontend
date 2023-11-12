import './Destination3.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
function setupSearchBar() {
    let originBar = document.getElementById('origin')
    let destinationBar = document.getElementById('destination')
    try {
        originBar.value = JSON.parse(localStorage.getItem('originPlace'));
        originBar.value = 'ตำแหน่งปัจจุบัน';
    } catch (e) {
        originBar.value = localStorage.getItem('originPlace');
    }
    destinationBar.value = localStorage.getItem('destinationPlace');
    originBar.disabled = true;
    destinationBar.disabled = true;
}

function setupMethod() {

}

function Destination3() {
    const navigate = useNavigate();
    useEffect(() => {
        setupSearchBar();
    }, []);
    return (
        <div className="App">
            <div class="bg">
                <div class="pathbox">
                    <p><button class="goback">
                        <img src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class="findway">ค้นหาเส้นทาง</text></p>
                    <div class="pu"><img class="up" src="/picture/up.png"></img>
                        <input id='origin' class="position" type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class="df"><img class="flag" src="/picture/flag.png"></img>
                        <input id='destination' class="destination" type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class="lastsearch" id='listStepFast'>เร็วที่สุด
                    <button class="ls">
                        <img class="starf" src="/picture/car.png"></img>
                        <button class="close"><img src="/picture/Vector.png"></img></button>
                        <p class="lastsearchpath">สาย34</p>
                    </button>
                </div>
                <div class="save" id='listStepMini'>เปลี่ยนรถน้อยที่สุด
                    <button class="s">
                        <img class="starf" src="/picture/car.png"></img>
                        <button class="close"><img src="/picture/Vector.png"></img></button>
                        <p class="savepath">สาย59</p>
                    </button>
                </div>

                {/* <button class="search">
                    ค้นหา
                </button> */}

            </div>

        </div>

    );
}
export default Destination3;