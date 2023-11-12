import './Chat.css';
function Chat() {
    return (
        <div className="App">
            <div class="bg">
                <div class="head">
                    <button class="back"><img src="/picture/Arrow 2.png"></img></button>
                    <p class="contact">ติดต่อผู้โดยสาร</p>
                </div>
                <div class="chatinfo"></div>
                <div class="chatbar">
                    <button class="plus"><img src="/picture/Plus.png"></img></button>
                    <button class="cam"><img src="/picture/Camera.png"></img></button>
                    <button class="image"><img src="/picture/Image.png"></img></button>
                    <div class="taskchat"><input class="chat" type='text' placeholder='Aa'></input>
                        <button class="emoji" ><img src="/picture/Union.png"></img></button></div>
                    <button class="mic"><img src="/picture/Voice.png"></img></button>
                </div>
            </div>
        </div>

    );
}
export default Chat;