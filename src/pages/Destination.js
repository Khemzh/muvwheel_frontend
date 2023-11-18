import destinationcss from './Destination.module.css';
import { initAutocomplete, calcRoute2 } from '../back/map_api';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

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

function Destination() {
    const navigate = useNavigate();
    useEffect(() => {
        setupSearchBar();
    }, []);
    return (
        <div className={destinationcss.App}>
            <div class={destinationcss.bg}>
                <div class={destinationcss.pathbox}>
                    <p><button class={destinationcss.goback}>
                        <img class={destinationcss.gb} src="/picture/Arrow 2.png" onClick={()=>{navigate('/home')}}></img>
                    </button>
                        <text class={destinationcss.findway}>ค้นหาเส้นทาง</text>
                    </p>
                    <div class={destinationcss.pu}><img class={destinationcss.up} src="/picture/up.png"></img>
                        <input id='origin' class={destinationcss.position} type='text' placeholder='ตำแหน่งปัจจุบัน'></input></div>
                    <div class={destinationcss.df}><img class={destinationcss.flag} src="/picture/flag.png"></img>
                        <input id='destination' class={destinationcss.destination} type='text' placeholder='ปลายทาง'></input>
                    </div>

                </div>

                <button class={destinationcss.search} onClick={async function(){let c = await calcRoute2();if (c){navigate('/destination3')}}}>
                    ค้นหา
                </button>

            </div>

        </div>

    );
}
export default Destination;