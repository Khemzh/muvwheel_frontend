import showpathcss from './ShowPath.module.css'
import React, { useState, useEffect } from 'react'

export default function ShowPath() {
  const [mainbox, setmain] = useState(
    <div className={showpathcss.upp} onClick={() => click(listBus)}>
      <img className={showpathcss.upArrow} src="/img/arrowup.png" />
    </div>,
  )
  const [Heart, setHeart] = useState(false)

  const Heartclick = () => {
    setHeart(!Heart)
  }

  const [listBus, listbus] = useState(
    <div className={showpathcss.blueBox} onClick={() => click(mainbox)}>
      <ul>
        <ol>
          <div>
            <div>
              <img className={showpathcss.upArrow} src="/img/arrowup.png" />
            </div>
            <div className={showpathcss.showBox}>
              <div className={showpathcss.cntSign}>46ป้าย</div>
              <div className={showpathcss.startPoint}>
                <img className={showpathcss.pin} src="/img/pin.png" alt=" " />
                <p className={showpathcss.st}>หอพักนิสิตจุฬา</p>
              </div>

              <div className={showpathcss.final}>
                <div className={showpathcss.straightLine}>
                  <img
                    className={showpathcss.line}
                    src="/img/straightLine.png"
                  />
                  <p className={showpathcss.countSign}>16ป้าย</p>
                </div>
                <div className={showpathcss.signBox}>
                  <p className={showpathcss.sai}>1-33</p>
                  <p className={showpathcss.st}>หอพักนิสิตจุฬา</p>
                </div>
              </div>
              <div>
                <button className={showpathcss.btn}> เลือกเส้นทาง </button>
              </div>
            </div>
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
        <div className={showpathcss.header}>
          <div>
            <img className={showpathcss.leftArrow} src="/img/arrow.png" />
          </div>
          <div className={showpathcss.headerText}>
            <h2 className={showpathcss.sentang}>เส้นทาง</h2>
            <h4 className={showpathcss.info}>หอพักนิสิตจุฬา</h4>
          </div>
          <div>
            <button class={showpathcss.h} onClick={Heartclick}>
              {!Heart && <img class={showpathcss.heart} src="/img/heart.png"></img>}
              {Heart && <img class={showpathcss.heart} src="/img/heartpink.png"></img>}
            </button>
            
          </div>
        </div>

        <div className={showpathcss.body}>
          <div className={showpathcss.map}>{mainbox}</div>
        </div>
      </div>
    </div>
  )
}
