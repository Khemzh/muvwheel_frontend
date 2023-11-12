import React, { useState } from 'react';
import popupcss from './Popup.module.css';
const PopupMenu = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div class={popupcss.dp}>
      <button onClick={togglePopup}><img src="/picture/menu.png"></img></button>
      {isPopupVisible && (
        <div className= {popupcss.popup_menu}>
          <ul>
            <li>
              <div>
                <div> //pic
                  <button onClick={togglePopup}><img class={popupcss.back} src="/picture/leading-icon.png"></img></button>
                  <img class={popupcss.man} src="/picture/Rectangle 6.png"></img>
                </div>
                <button class={popupcss.login}>เข้าสู่ระบบ</button></div>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;