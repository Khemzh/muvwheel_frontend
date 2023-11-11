import './Home.css';
import React, { useState,useEffect } from 'react';
// import {button} from 'react';





const PopupMenu = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const [val, setVal] = useState('ต้องการจะไปที่ไหน ?')

const [listBus,listbus] = useState(<div className='showBus' onClick={() => click(mainbox)}> 
        <div className='bus3'>
          <img className='bus' src ="/img/icon _car outline_.png" alt=" " />
        </div>
        <ul>
          <ol>
          <div className='listOfBus' >
              <p className='number'>
                  50
              </p>
              <p className='busToBus'>
                  A &rarr; B
                  <div className='whiteLine'>
                  
              </div>
              </p>
              <p className='number'>
                  50
              </p>
              <p className='busToBus'>
                  A &rarr; B
                  <div className='whiteLine'>
                  
              </div>
              </p>
              <p className='number'>
                  50
              </p>
              <p className='busToBus'>
                  A &rarr; B
                  <div className='whiteLine'>
                  
              </div>
              </p>
              <p className='number'>
                  50
              </p>
              <p className='busToBus'>
                  A &rarr; B
                  <div className='whiteLine'>
                  
              </div>
              </p>
              
          </div>
          
          </ol>
        </ul>
        
          
          
        </div>
)
const [mainbox, setmain] = useState(<div>
        <button className='busClick'  onClick={() => click(listBus)}> 
        <img className='bus1' src ="/img/icon _car outline_.png" alt=" " /></button> 

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
        <div className='header'>
        <div class="dp">
      <button className = "bbb" onClick={togglePopup}><img className='bt' src="/img/icon _menu_.png"></img></button>
      {isPopupVisible && (
        <div className="popup-menu">
          <ul>
            <ol>
              <div>
                <div className='pic'>
                  <button className='back' onClick={togglePopup}><img  className='bbb1' src="/img/leading-icon.png"></img></button>
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


export default PopupMenu;