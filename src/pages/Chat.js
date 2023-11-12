import chatcsss from './Chat.module.css';
function Chat() {
    return (
        <div className={chatcsss.App}>
            <div class = {chatcsss.bg}>
                <div class = {chatcsss.bg}>
                    <button class = {chatcsss.back}><img src="/picture/Arrow 2.png"></img></button>
                    <p class = {chatcsss.contact}>ติดต่อผู้โดยสาร</p>
                </div>
                <div class = {chatcsss.chatinfo}></div>
                <div class = {chatcsss.chatbar}>
                    <button class = {chatcsss.plus}><img src="/picture/Plus.png"></img></button>
                    <button class = {chatcsss.cam}><img src="/picture/Camera.png"></img></button>
                    <button class = {chatcsss.image}><img src="/picture/Image.png"></img></button>
                    <div class = {chatcsss.taskchat}><input class="chat" type='text' placeholder='Aa'></input> 
                    <button class = {chatcsss.emoji} ><img src="/picture/Union.png"></img></button></div>
                    <button class = {chatcsss.mic}><img src="/picture/Voice.png"></img></button>
                </div>
            </div>
        </div>

    );
}
export default Chat;