import './Rating.css';
import React, { useState, useEffect } from 'react';
// import {button} from 'react';





const PopupMenu = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const [Heart, setHeart] = useState(false);

  const Heartclick = () => {
    setHeart(!Heart);
  };
  const [Star, setStar] = useState(false);

  const starclick = () => {
    setStar(!Star);
  };
  const [Star2, setStar2] = useState(false);

  const starclick2 = () => {
    setStar2(!Star2);
  };
  const [Star3, setStar3] = useState(false);

  const starclick3 = () => {
    setStar3(!Star3);
  };
  const [Star4, setStar4] = useState(false);

  const starclick4 = () => {
    setStar4(!Star4);
  };
  const [Star5, setStar5] = useState(false);

  const starclick5 = () => {
    setStar5(!Star5);
  };
  const [val, setVal] = useState('ต้องการจะไปที่ไหน ?')

  const [listBus, listbus] = useState(<div className='showBus' onClick={() => click(mainbox)}>
    <div className='bus3'>
      <img className='bus' src="/picture/car.png" alt=" " />
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
    <button className='busClick' onClick={() => click(listBus)}>
      <img className='bus1' src="/picture/car.png" alt=" " /></button>

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
          {/* {mainbox} */}
          <div class="ratingbox">
            <button class="h" onClick={Heartclick} >
              {!Heart && (
                <img class="heart" src="/picture/heartpink.png"></img>
              )}
              {Heart && (
                <img class="heart" src="/picture/heart.png"></img>
              )}
            </button>

            <p class="arriving">ถึงจุดหมายปลายทาง</p>

            <div class="rb">
              <p class="giverating">ให้คะแนนคนขับรถ</p>
              <div class="ss">
                <button class="s" onClick={starclick} >
                  {!Star && (
                    <img class="star" src="/picture/staryellow.png"></img>
                  )}
                  {Star && (
                    <img class="star" src="/picture/star.png"></img>
                  )}
                </button>
                <button class="s" onClick={starclick2} >
                  {!Star2 && (
                    <img class="star" src="/picture/staryellow.png"></img>
                  )}
                  {Star2 && (
                    <img class="star" src="/picture/star.png"></img>
                  )}
                </button>
                <button class="s" onClick={starclick3} >
                  {!Star3 && (
                    <img class="star" src="/picture/staryellow.png"></img>
                  )}
                  {Star3 && (
                    <img class="star" src="/picture/star.png"></img>
                  )}
                </button>
                <button class="s" onClick={starclick4} >
                  {!Star4 && (
                    <img class="star" src="/picture/staryellow.png"></img>
                  )}
                  {Star4 && (
                    <img class="star" src="/picture/star.png"></img>
                  )}
                </button>
                <button class="s" onClick={starclick5} >
                  {!Star5 && (
                    <img class="star" src="/picture/staryellow.png"></img>
                  )}
                  {Star5 && (
                    <img class="star" src="/picture/star.png"></img>
                  )}
                </button>
              </div>

              <p class="name">name,busnumber</p>
              <button class="end" >สิ้นสุดการเดินทาง</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default PopupMenu;