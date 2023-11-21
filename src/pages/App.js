import appcss from './App.module.css';
import React from 'react'

function App() {
    return (
        <div className={`${appcss.App} ${appcss.elementToFadeInAndOut}`}>
            <div className={appcss.bg}>
                <div className={appcss.circle}>
                    <div className={appcss.helpBus}>
                        MUVWHEEL
                    </div>
                </div>
                <img className={appcss.photo} src="/img/disabled-guy.png" alt=" " />
            </div>


        </div>
    );
}

export default App;
