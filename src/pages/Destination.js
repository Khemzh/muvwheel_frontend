import React, { useEffect } from 'react';
import './Destination.css';
import { initAutocomplete, calcRoute } from '../back/map_api';
import { useNavigate } from 'react-router-dom';

function setupSearchBar() {
    initAutocomplete(document.getElementById('origin'));
    initAutocomplete(document.getElementById('destination'));
}

function Destination() {
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
                <button class="search" onClick={async function(){let c = await calcRoute();if (c){navigate('/destination3')}}}>
                    ค้นหา
                </button>

            </div>
        </div>

    );
}
export default Destination;