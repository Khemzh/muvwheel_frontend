import destination2css from './Destination2.module.css';
import { initAutocomplete, calcRoute2 } from '../back/map_api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getuser } from '../back/user_api';

function setupSearchBar() {
    let originBar = document.getElementById('origin')
    let destinationBar = document.getElementById('destination')
    initAutocomplete(originBar);
    initAutocomplete(destinationBar);
    try {
        originBar.value = JSON.parse(localStorage.getItem('originPlace'));
        originBar.value = 'ตำแหน่งปัจจุบัน';
    } catch (e) {
        originBar.value = localStorage.getItem('originPlace');
    }
    try {
        destinationBar.value = localStorage.getItem('destinationPlace');
    } catch (e) {
        console.log(e);
    }

}

function Destination2() {
    const navigate = useNavigate();
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };
    const [isPopupVisible2, setPopupVisible2] = useState(false);

    const togglePopup2 = () => {
        setPopupVisible2(!isPopupVisible2);
    };
    const [Close, setClose] = useState(true);

    const Closeclick = () => {
        setClose(!Close);
    };
    function setHis() {
        let payload = {
            uid: getuser('uid'),
            token: getuser('token')
        }
        let url = 'http://127.0.0.1:3001' + '/history'
        axios
            .post(url, payload)
            .then((res) => {
                if (res.status == 200) {
                    let history = document.getElementById('history');
                    history.innerHTML = res.data.nameplace;
                }
                else {
                    setClose(false);
                }
            })
    }
    function clickChangeDestination(option) {
        var destination = document.getElementById('destination');
        if (option === "history$xyz") {
            destination.value = document.getElementById('history').innerHTML;
        }else{
            destination.value = option;
        }
        
        localStorage.setItem('destinationPlace', destination.value);
    }

    function setFav() {
        let listfav = document.getElementById('listfav');
        let payload = {
            uid: getuser('uid'),
            token: getuser('token')
        }
        let url = 'http://127.0.0.1:3001' + '/favourite/get'

        axios
            .post(url, payload)
            .then((res) => {
                console.log(res.data.data);
                listfav.innerHTML = ''
                res.data.data.forEach(e => {
                    const buttonElement = document.createElement('button');
                    buttonElement.className = destination2css.s;

                    const closeButton = document.createElement('button');
                    closeButton.className = destination2css.close;
                    const closeIcon = document.createElement('img');
                    closeIcon.className = destination2css.c;
                    closeIcon.src = '/picture/icon-close-512 1.png';
                    closeButton.appendChild(closeIcon);
                    buttonElement.appendChild(closeButton);

                    const boxElement = document.createElement('div');
                    boxElement.className = destination2css.box;
                    const starButton = document.createElement('button');
                    starButton.className = destination2css.star;
                    starButton.addEventListener('click', togglePopup2);
                    const starImage = document.createElement('img');
                    starImage.className = destination2css.starf;
                    starImage.src = '/picture/Star_fill2.png';
                    starButton.appendChild(starImage);
                    boxElement.appendChild(starButton);

                    const savePathElement = document.createElement('p');
                    savePathElement.className = destination2css.savepath;
                    savePathElement.textContent = e.nameplace;
                    boxElement.appendChild(savePathElement);

                    buttonElement.appendChild(boxElement);
                    buttonElement.addEventListener('click', ()=>{clickChangeDestination(`${e.nameplace}`)}); // Change event name to 'click'

                    // Append the button element to the existing code
                    // Replace the existing button element with the new button element
                    listfav.appendChild(buttonElement);
                });

            })
            .catch((e) => {
                console.log('cant connect to server\n' + e.message)
            })
    }
    useEffect(() => {
        setupSearchBar();
        setHis();
        setFav();
    }, []);



    const close = () => {
        setClose(!close);

    };
    return (
        <div className={destination2css.App}>

            <div class={destination2css.bg}>
                <div class={destination2css.pathbox}>
                    <p><button class={destination2css.goback} onClick={() => { navigate('/') }}>
                        <img class={destination2css.gb} src="/picture/Arrow 2.png"></img>
                    </button>
                        <text class={destination2css.findway}>ค้นหาเส้นทาง</text></p>
                    <div class={destination2css.pu}><img class={destination2css.up} src="/picture/up.png"></img>
                        <input class={destination2css.position} type='text' id='origin' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destination2css.df}><img class={destination2css.flag} src="/picture/flag.png"></img>
                        <input class={destination2css.destination} type='text' id='destination' placeholder='ปลายทาง'></input>
                    </div>

                </div>
                <div class={destination2css.lastsearch}><p class={destination2css.lstext} >ค้นหาล่าสุด</p>
                    <ul>
                        <ol>
                            {Close && (
                                <div>
                                    <button class={destination2css.ls}  onClick={()=>{clickChangeDestination("history$xyz")}}>
                                        <button class={destination2css.close} onClick={Closeclick} ><img class={destination2css.c} src="/picture/icon-close-512 1.png"></img></button>
                                        <div class={destination2css.box}>
                                            <p class={destination2css.lastsearchpath} id='history'>สยามพารากอน</p></div>
                                    </button>

                                </div>

                            )}

                        </ol>
                    </ul>
                </div>
                <div class={destination2css.save}>
                    <p class={destination2css.savetext}>เส้นทางที่บันทึก</p>
                    <div className={destination2css.listfav} id='listfav'>
                        {/* <button class={destination2css.s}>
                            <button class={destination2css.close}><img class={destination2css.c} src="/picture/icon-close-512 1.png"></img></button>
                            <div class={destination2css.box}><button class={destination2css.star} onClick={togglePopup2}>
                                {!isPopupVisible2 && (

                                    <img class={destination2css.starf} src="/picture/Star_fill2.png"></img>
                                )}
                                {isPopupVisible2 && (<img class={destination2css.starf} src="/picture/Star_fill.png"></img>)}
                            </button>
                                <p class={destination2css.savepath}>ม.เกษตร</p></div>
                        </button> */}

                    </div>
                </div>

                <button class={destination2css.search} onClick={async function () { let c = await calcRoute2(); if (c) { navigate('/destination3') } }}>
                    ค้นหา
                </button>

            </div>

        </div >

    );
}
export default Destination2;