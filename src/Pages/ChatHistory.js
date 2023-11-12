import chathistorycss from './ChatHistory.module.css';
import React, { useState } from 'react';
function ChatHistory() {
    const [isPopupVisible, setPopupVisible] = useState(true);

    const togglePopup = () => {
        if (isPopupVisible) {
            setPopupVisible(false);
          }
    };
    return (
        <div className={chathistorycss.App}>
            <div class={chathistorycss.bg}>
                <div class={chathistorycss.head}>
                    <button class={chathistorycss.back}><img src="/picture/Arrow-left.png"></img></button>
                    <p class={chathistorycss.contact}>Chat</p>
                    <button class={chathistorycss.search}><img src="/picture/search-normal.png"></img></button>
                </div>
                <div class={chathistorycss.m}>Massage</div>
                <ul>
                    <ol>
                            <button class={chathistorycss.Chat} onClick={togglePopup}>

                                <img class={chathistorycss.pic} src="/picture/Rectangle 1.png"></img>
                                <p class={chathistorycss.n}>name</p>
                                <p class={chathistorycss.t}>time</p>
                                <p class={chathistorycss.l}>lasttext</p>
                                
                                {isPopupVisible && (
                                    <div>
                                        <img class={chathistorycss.status} src="/picture/Rectangle 1.png"></img>
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