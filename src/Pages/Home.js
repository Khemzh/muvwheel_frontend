import './Home.css';
import React, { useState, useEffect } from 'react';
import { initMaps, marker_api } from '../back/map_api';
// import {button} from 'react';

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [val, setVal] = useState('ต้องการจะไปที่ไหน ?');

  useEffect(() => {
    // Load Google Maps script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCUP4lwuTEXSPnFmJIY_eGSEnOGDGPxMRg&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
    if (initMap.map) {
      // Add an event listener to the marker, e.g., a click event
      markers.marker.addListener('click', () => {
        // Handle marker click event
        console.log('Marker clicked!');
      });

      // Optionally, you can center the map on the marker
      initMap.map.setCenter(markers.marker.getPosition());

      // Optionally, you can set the map zoom level
      initMap.map.setZoom(12);
    }
    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the useEffect runs once on component mount

  const initMap = () => {
    // Create a map centered at a specific location
    const map = initMaps();
  };

  const markers = () => {
    const marker = marker_api();
  }

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const [listBus, listbus] = useState(<div className='showBus' onClick={() => click(mainbox)}>
    <img className='bus' src="/img/icon _car outline_.png" alt=" " />
    <div className='listOfBus'>
      <p className='number'>
        50
      </p>
      <p className='busToBus'>
        A &rarr; B
        <div className='whiteLine'>Z

        </div>
      </p>

    </div>
  </div>
  )
  const [mainbox, setmain] = useState(<div>
    <button className='busClick' onClick={() => click(listBus)}>
      <img className='bus1' src="/img/icon _car outline_.png" alt=" " /></button>

  </div>
  )

  const click = listBus => {
    setmain(listBus)
  }
  const click1 = mainbox => {
    setmain(mainbox)
  }


  return (
    <div className="App">
      <div className='bg'>
          <div className='map' id="map"></div>
          <div className='header'>
          <div class="dp">
            <button className="bbb" onClick={togglePopup}><img className='bt' src="/img/icon _menu_.png"></img></button>
            {isPopupVisible && (
              <div className="popup-menu">
                <ul>
                  <ol>
                    <div>
                      <div className='pic'>
                        <button className='back' onClick={togglePopup}><img className='bbb1' src="/img/leading-icon.png"></img></button>
                        <img class="man" src="/img/disabled-guy.png"></img>
                      </div>
                      <button class="login">เข้าสู่ระบบ</button>
                    </div>
                  </ol>

                </ul>
              </div>
            )}
          </div>
          <input value={val} className='txt' />
          {mainbox}
        </div>
      </div>

    </div>
  );
}


export default Home;