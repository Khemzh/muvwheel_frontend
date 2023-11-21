import travelcss from './Travel.module.css';
import React, { useState, useEffect } from 'react';
import { initMap } from '../back/map_api';
import { useNavigate } from 'react-router-dom';
import { getuser } from '../back/user_api';

var map = null

function getroute() {
    let option = localStorage.getItem('showPath')
    let transit = null
    if (option === 'fast') {
        transit = window.routes.fastestRoute
    } else if (option === 'min') {
        transit = window.routes.shortestRoute
    }
    return transit
}

async function setupmap() {
    let transit = getroute()
    var req = window.routes.all
    req.routes = [transit]
    map = await new window.google.maps.Map(document.getElementById("map"));
    var directionsRenderer = await new window.google.maps.DirectionsRenderer({ map: map })
    await directionsRenderer.setDirections(
        req
    );
    console.log("{system} setup map done")
    let userLatLng = JSON.parse(localStorage.getItem('originPlace'));
    map.setCenter(userLatLng);
}

async function setupdetail() {
    let nextdestination2 = document.getElementById('nextdestination2')
    console.log('{system} setup detail start');
    let originPoObj = document.getElementById('originPo')
    let cntSignObj = document.getElementById('cntSign')
    try {
        let po = JSON.parse(localStorage.getItem('originPlace'))
        originPoObj.innerHTML = "ตำแหน่งปัจจุบัน"
    } catch (e) {
        originPoObj.innerHTML = localStorage.getItem('originPlace')
    }


    let transit = getroute()

    var x = transit.legs[0].steps[0]
    if (x.travel_mode === 'TRANSIT') {
        nextdestination2.innerHTML = transit.arrival_stop.name;
    } else if (x.travel_mode === 'WALKING') {
        nextdestination2.innerHTML = x.instructions.split('เดินไปที่')[1];
    }

    let showpathblock = document.getElementById('showpathblock')
    let countSign = 0
    let countWalk = 0
    showpathblock.innerHTML = ''
    transit.legs[0].steps.forEach(step => {
        console.log(step);
        const straightLineDiv = document.createElement('div');
        straightLineDiv.className = travelcss.straightLine;

        const straightLineImg = document.createElement('img');
        straightLineImg.className = travelcss.line;
        straightLineImg.src = '/img/straightLine.png';

        var countSignP = null
        countSignP = document.createElement('p');
        countSignP.className = travelcss.countSign;
        if (step.travel_mode === 'TRANSIT') {
            countSignP.textContent = step.transit.num_stops + ' ป้าย';
            countSign += step.transit.num_stops;
        } else {
            countSignP.textContent = step.distance.text;
            countWalk += step.distance.value;
        }

        straightLineDiv.appendChild(straightLineImg);
        straightLineDiv.appendChild(countSignP);

        const signBoxDiv = document.createElement('div');
        signBoxDiv.className = travelcss.signBox;

        const saiP = document.createElement('p');
        saiP.className = travelcss.sai;
        if (step.travel_mode === 'TRANSIT') {
            saiP.textContent = step.transit.line.name.split(':')[0];
        } else {
            saiP.textContent = 'เดิน';
        }


        const stP = document.createElement('p');
        stP.className = travelcss.st;
        if (step.travel_mode === 'TRANSIT') {
            stP.textContent = step.transit.arrival_stop.name;
        } else if (step.travel_mode === 'WALKING') {
            stP.textContent = step.instructions.split('เดินไปที่')[1];
        }

        signBoxDiv.appendChild(saiP);
        signBoxDiv.appendChild(stP);

        showpathblock.appendChild(straightLineDiv);
        showpathblock.appendChild(signBoxDiv);

    })
    cntSignObj.textContent = 'ผ่าน ' + countSign + ' ป้าย, เดิน ' + (countWalk / 1000) + ' กม.';
    console.log('{system} setup detail end');
}
const Travel = () => {
    const navigate = useNavigate();

    function setnexdestination1() {
        var nextdestination1 = document.getElementById('nextdestination1')
        let transit = getroute()
        var x = transit.legs[0].steps[0]
        if (x.travel_mode === 'TRANSIT') {
            nextdestination1.innerHTML = transit.arrival_stop.name;
        } else if (x.travel_mode === 'WALKING') {
            nextdestination1.innerHTML = x.instructions.split('เดินไปที่')[1];
        }
    }

    useEffect(() => {
        const init = async () => {
            await setupmap()
            if (getuser('isLogin')) {
                setLogin(true);
            }
            setnexdestination1()
        };
        init();

    }, []);

    const [isLogin, setLogin] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);


    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const [unreach, setunreach] = useState(
        <div>
            <div className={travelcss.final} onClick={() => click(reach)} >
                <div className={travelcss.signBox}>
                    <p className={travelcss.sai}>33</p>
                    <p className={travelcss.st}>หอพักนิสิตจุฬา</p>
                    <p className={travelcss.cntTime}>อีก 5 นาที</p>
                </div>
            </div>
        </div>
    )

    const [reach, setreach] = useState(
        <div className={travelcss.final1} onClick={() => click(unreach)} >
            <div className={travelcss.signBox1}>
                <p className={travelcss.sai1}>33</p>
                <p className={travelcss.st1}>หอพักนิสิตจุฬา</p>
                <p className={travelcss.cntTime1}>อีก 5 นาที</p>
            </div>
        </div>

    )


    const [listBus, listbus] = useState(
        <div className={travelcss.blueBox}>
            <ul>
                <ol>
                    <div>
                        <div onClick={async() => {await click(mainbox);setnexdestination1()}}>
                            <p className={travelcss.bus} id='nextdestination2'>
                            </p>
                        </div>
                        <div className={travelcss.showBox}>
                            <div className={travelcss.scroll}>
                                <div className={travelcss.cntSign} id='cntSign'>46ป้าย</div>
                                <div className={travelcss.startPoint}>
                                    <img className={travelcss.pin} src="/img/pin.png" alt=" " />
                                    <p className={travelcss.st} id='originPo'>หอพักนิสิตจุฬา</p>
                                </div>

                                <div className={travelcss.final} id='showpathblock'>

                                    {/* <div className={travelcss.straightLine}>
                                        <img
                                            className={travelcss.line}
                                            src="/img/straightLine.png"
                                        />
                                        <p className={travelcss.countSign}>16ป้าย</p>
                                    </div>
                                    <div className={travelcss.signBox}>
                                        <p className={travelcss.sai}>1-33</p>
                                        <p className={travelcss.st}>หอพักนิสิตจุฬา</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <button className={travelcss.btn} onClick={() => { navigate("/") }}> สิ้นสุดการเดินทาง </button>
                    </div>
                </ol>
            </ul>
        </div>,
    )
    const [mainbox, setmain] = useState(<div>
        <button className={travelcss.busClick} onClick={async () => { await click(listBus); setupdetail(); }}>
            <p className={travelcss.bus1} id='nextdestination1'>
            </p>
        </button>


    </div>
    )



    const click = listBus => {
        setmain(listBus)
    }
    const click1 = mainbox => {
        setmain(mainbox)
    }

    const click2 = reach => {
        setmain(reach)
    }
    const click3 = unreach => {
        setmain(unreach)
    }



    return (
        <div className={travelcss.App}>
            <div className={travelcss.bg} >
                <div className={travelcss.map} id='map'></div>
            </div>
            <div class={travelcss.dp}>
                <button className={travelcss.bbb} onClick={togglePopup}>
                    <img className={travelcss.bt} src="/img/icon _menu_.png"></img>
                </button>
                {isPopupVisible && (
                    <div className={travelcss.popup_menu}>
                        <ul>
                            <ol>
                                <div>
                                    <div className={travelcss.pic}>
                                        <button className={travelcss.back} onClick={togglePopup} ><img className={travelcss.bbb1} src="/img/leading-icon.png"></img></button>
                                        <img class={travelcss.man} src="/img/disabled-guy.png"></img>
                                    </div>
                                    {isLogin ? (
                                        <button class={travelcss.profile} onClick={() => { navigate('/user') }}>
                                            <img className={travelcss.userimg} src="/picture/User image.png"></img>
                                            <p className={travelcss.username}>{getuser("name")}&nbsp;&nbsp;&nbsp;{getuser("surname")}</p>
                                        </button>
                                    ) : (
                                        <button class={travelcss.login} onClick={() => { navigate('/signin') }}>เข้าสู่ระบบ</button>
                                    )}
                                </div>
                            </ol>
                        </ul>
                    </div>
                )}
                <div className={travelcss.header}>
                    {mainbox}
                </div>

            </div>

        </div>
    );
}


export default Travel;