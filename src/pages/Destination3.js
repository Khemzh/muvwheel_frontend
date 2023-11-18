import destination3css from './Destination3.module.css';
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
    let listStepFast = document.getElementById('listStepFast');
    let listStepMini = document.getElementById('listStepMini');
    let fastestRoute = window.routes.fastestRoute.legs[0].steps
    .filter(step => step.travel_mode === 'TRANSIT')
    .map(step => step.transit.line.name);
    let shortestRoute = window.routes.shortestRoute.legs[0].steps
    .filter(step => step.travel_mode === 'TRANSIT')
    .map(step => step.transit.line.name);

    listStepFast.innerHTML = '';
    for (let i = 0; i < fastestRoute.length; i++) {
        if (i === fastestRoute.length - 1) {
            listStepFast.innerHTML += fastestRoute[i].split(':')[0];
        } else {
            listStepFast.innerHTML += fastestRoute[i].split(':')[0] + ' &rarr; ';
        }
    }
    listStepMini.innerHTML = '';
    for (let i = 0; i < shortestRoute.length; i++) {
        if (i === shortestRoute.length - 1) {
            listStepMini.innerHTML += shortestRoute[i].split(':')[0];
        } else {
            listStepMini.innerHTML += shortestRoute[i].split(':')[0] + ' &rarr; ';
        }
    }
    if (listStepMini.innerHTML === "") {
        listStepMini.innerHTML = "ไม่มีเส้นทางที่ผ่านทางรถประจำทาง";
    }
    if (listStepFast.innerHTML === "") {
        listStepFast.innerHTML = "ไม่มีเส้นทางที่ผ่านทางรถประจำทาง";
    }
}

function Destination3() {
    const navigate = useNavigate();
    useEffect(() => {
        setupSearchBar();
        setupMethod();
    }, []);
    return (
        <div className={destination3css.App}>
            <div class={destination3css.bg}>
                <div class={destination3css.pathbox}>
                    <p><button class={destination3css.goback}>
                        <img class={destination3css.gb} src="/picture/Arrow 2.png" onClick={()=>{navigate('/destination')}}></img>
                    </button>
                        <text class={destination3css.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destination3css.pu}><img class={destination3css.up} src="/picture/up.png"></img>
                        <input id='origin' class={destination3css.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destination3css.df}><img class={destination3css.flag} src="/picture/flag.png"></img>
                        <input id='destination' class={destination3css.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class={destination3css.lastsearch}><p class={destination3css.lstext}>เร็วที่สุด</p>
                    <ul>
                        <ol>
                            <button class={destination3css.ls} onClick={function(){localStorage.setItem("showPath", "fast");navigate('/showpath')}}>
                                <button class={destination3css.vector}><img class={destination3css.v} src="/picture/Vector.png"></img></button>
                                <div class={destination3css.box}><button class={destination3css.car}><img class={destination3css.carf} src="/picture/car.png"></img>
                                </button>
                                    <p class={destination3css.lastsearchpath} id='listStepFast'></p></div>
                            </button>
                        </ol>
                    </ul>
                    
                </div>
                <div class={destination3css.save}><p class={destination3css.savetext}>เปลี่ยนรถน้อยที่สุด</p>
                    <ul>
                        <ol>
                            <button class={destination3css.s} onClick={function(){localStorage.setItem("showPath", "min");navigate('/showpath')}}>
                                <button class={destination3css.vector}><img class={destination3css.v} src="/picture/Vector.png"></img></button>
                                <div class={destination3css.box}><button class={destination3css.car}><img class={destination3css.carf} src="/picture/car.png"></img>
                                </button>
                                    <p class={destination3css.savepath} id='listStepMini'></p></div>
                            </button>
                        </ol>
                    </ul>
                </div>

                {/* <button class={destination3css.search}>
                    ค้นหา
                </button> */}

            </div>

        </div>

    );
}
export default Destination3;