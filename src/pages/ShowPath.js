import showpathcss from './ShowPath.module.css'
import React, { useState, useEffect } from 'react'
import { initMap } from '../back/map_api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getuser } from '../back/user_api'

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
}
async function setupdetail() {
    console.log('{system} setup detail start');
    let destinationTopObj = document.getElementById('destinationTop')
    let originPoObj = document.getElementById('originPo')
    let cntSignObj = document.getElementById('cntSign')
    destinationTopObj.innerHTML = localStorage.getItem('destinationPlace')
    try {
        let po = JSON.parse(localStorage.getItem('originPlace'))
        originPoObj.innerHTML = "ตำแหน่งปัจจุบัน"
    } catch (e) {
        originPoObj.innerHTML = localStorage.getItem('originPlace')
    }


    let transit = getroute()

    let showpathblock = document.getElementById('showpathblock')
    let countSign = 0
    let countWalk = 0
    showpathblock.innerHTML = ''
    transit.legs[0].steps.forEach(step => {
        console.log(step);
        const straightLineDiv = document.createElement('div');
        straightLineDiv.className = showpathcss.straightLine;

        const straightLineImg = document.createElement('img');
        straightLineImg.className = showpathcss.line;
        straightLineImg.src = '/img/straightLine.png';

        var countSignP = null
        countSignP = document.createElement('p');
        countSignP.className = showpathcss.countSign;
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
        signBoxDiv.className = showpathcss.signBox;

        const saiP = document.createElement('p');
        saiP.className = showpathcss.sai;
        if (step.travel_mode === 'TRANSIT') {
            saiP.textContent = step.transit.line.name.split(':')[0];
        } else {
            saiP.textContent = 'เดิน';
        }


        const stP = document.createElement('p');
        stP.className = showpathcss.st;
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


    // ! -----------------------------------------------------

    // console.log(transit.legs[0].steps[1].transit);
    // console.log(transit.legs[0].steps[1].transit.num_stops);
    // console.log(transit.legs[0].steps[2].transit);
    // console.log(transit.legs[0].steps[2].transit.num_stops);


    // ! -----------------------------------------------------
    console.log('{system} setup detail done');
}

export default function ShowPath() {
    const navigate = useNavigate()
    useEffect(() => {
        setupmap();
        checkfav();
        updatehis();
        let destinationTopObj = document.getElementById('destinationTop')
        destinationTopObj.innerHTML = localStorage.getItem('destinationPlace')
    }, [])

    const [mainbox, setmain] = useState(
        <div className={showpathcss.upp} onClick={async () => { await click(listBus); setupdetail(); }}>
            <img className={showpathcss.upArrow} src="/img/arrowup.png" />
        </div>,
    )
    const [Heart, setHeart] = useState(false)

    const Heartclick = () => {
        setHeart(!Heart)
    }
    async function fav() {
        let url = 'http://127.0.0.1:3001' + '/favourite'
        let payload = {
            uid: getuser('uid'),
            token: getuser('token'),
            name: localStorage.getItem('destinationPlace')
        }
        if (!Heart) {
            await axios
                .post(url + '/create', payload)
                .then((res) => {
                    console.log(res.data)
                }).catch((e) => {
                    console.log('cant connect to server\n' + e.message)
                })
        } else {
            await axios
                .post(url + '/remove', payload)
                .then((res) => {
                    console.log(res.data)
                }).catch((e) => {
                    console.log('cant connect to server\n' + e.message)
                })
        }
    }

    async function updatehis() {
        let url = 'http://127.0.0.1:3001' + '/history'
        let payload = {
            uid: getuser('uid'),
            token: getuser('token'),
            name: localStorage.getItem('destinationPlace')
        }
        await axios
            .post(url, payload)
            .then((res) => {
                console.log(res.data)
            }).catch((e) => {
                console.log('cant connect to server\n' + e.message)
            })
    }
    async function checkfav() {
        let url = 'http://127.0.0.1:3001' + '/favourite/get'
        let payload = {
            uid: getuser('uid'),
            token: getuser('token'),
        }
        await axios
            .post(url, payload)
            .then((res) => {
                console.log(res.data.data)
                res.data.data.forEach(element => {
                    if (element.nameplace === localStorage.getItem('destinationPlace')) {
                        setHeart(true)
                    }
                });
            }).catch((e) => {
                console.log('cant connect to server\n' + e.message)
            })
    }

    const [listBus, listbus] = useState(
        <div className={showpathcss.blueBox}>
            <ul>
                <ol>
                    <div>
                        <div onClick={() => click(mainbox)}>
                            <img className={showpathcss.upArrow} src="/img/arrowup.png" />
                        </div>
                        <div className={showpathcss.showBox}>
                            <div className={showpathcss.scroll}>
                                <div className={showpathcss.cntSign} id='cntSign'>46ป้าย</div>
                                <div className={showpathcss.startPoint}>
                                    <img className={showpathcss.pin} src="/img/pin.png" alt=" " />
                                    <p className={showpathcss.st} id='originPo'>หอพักนิสิตจุฬา</p>
                                </div>

                                <div className={showpathcss.final} id='showpathblock'>

                                    {/* <div className={showpathcss.straightLine}>
                                        <img
                                            className={showpathcss.line}
                                            src="/img/straightLine.png"
                                        />
                                        <p className={showpathcss.countSign}>16ป้าย</p>
                                    </div>
                                    <div className={showpathcss.signBox}>
                                        <p className={showpathcss.sai}>1-33</p>
                                        <p className={showpathcss.st}>หอพักนิสิตจุฬา</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <button className={showpathcss.btn} onClick={() => { navigate("/paid") }}> เลือกเส้นทาง </button>
                    </div>
                </ol>
            </ul>
        </div>,
    )

    const click = (listBus) => {
        setmain(listBus)
    }
    const click1 = (mainbox) => {
        setmain(mainbox)
    }

    return (
        <div className={showpathcss.App}>
            <div className={showpathcss.bg}>
                <div className={showpathcss.mapbord} id='map'></div>
            </div>
            <div className={showpathcss.header}>
                <div>
                    <img className={showpathcss.leftArrow} src="/img/arrow.png" onClick={() => { navigate('/destination3') }} />
                </div>
                <div className={showpathcss.headerText}>
                    <h2 className={showpathcss.sentang}>เส้นทาง</h2>
                    <h4 className={showpathcss.info} id='destinationTop'>หอพักนิสิตจุฬา</h4>
                </div>
                <div>
                    <button class={showpathcss.h} onClick={async () => { await Heartclick(); fav(); }}>
                        {!Heart && <img class={showpathcss.heart} src="/img/heart.png"></img>}
                        {Heart && <img class={showpathcss.heart} src="/img/heartpink.png"></img>}
                    </button>

                </div>
            </div>

            <div className={showpathcss.body}>{mainbox}
            </div>

        </div>
    )
}
