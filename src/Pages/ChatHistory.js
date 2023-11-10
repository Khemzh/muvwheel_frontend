import './ChatHistory.css';
import React, { useState } from 'react';
function ChatHistory() {
    const [isPopupVisible, setPopupVisible] = useState(true);

    const togglePopup = () => {
        if (isPopupVisible) {
            setPopupVisible(false);
          }
    };
    return (
        <div className="App">
            <div class="bg">
                <div class="head">
                    <button class="back"><img src="/picture/arrow-left.png"></img></button>
                    <p class="contact">Chat</p>
                    <button class="search"><img src="/picture/search-normal.png"></img></button>
                </div>
                <div class="m">Massage</div>
                <ul>
                    <ol>
                            <button class="Chat" onClick={togglePopup}>

                                <img class="pic" src="/picture/Rectangle 1.png"></img>
                                <p class="n">name</p>
                                <p class="t">time</p>
                                <p class="l">lasttext</p>
                                
                                {isPopupVisible && (
                                    <div>
                                        <img class="status" src="/picture/Rectangle 1.png"></img>
                                        </div>
                                
                                )}

                                <img></img>

                            </button>
                    </ol>
                </ul>
            </div>
        </div>

    );
}
export default ChatHistory;