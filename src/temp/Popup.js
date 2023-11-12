import React, { useState } from 'react';
import './Popup.css';
const PopupMenu = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <div class="dp">
            <button onClick={togglePopup}><img src="/picture/menu.png"></img></button>
            {isPopupVisible && (
                <div className="popup-menu">
                    <ul>
                        <li>
                            <div>
                                <div pic>
                                    <button onClick={togglePopup}><img class="back" src="/picture/leading-icon.png"></img></button>
                                    <img class="man" src="/picture/Rectangle 6.png"></img>
                                </div>
                                <button class="login">เข้าสู่ระบบ</button></div>
                        </li>

                    </ul>
                </div>
            )}
        </div>
    );
};

export default PopupMenu;