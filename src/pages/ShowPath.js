import './ShowPath.css';
import React, { useState, useEffect } from 'react';


export default function ShowPath() {
    return (
        <div className="App">
            <div className='bg'>
                <div className='header'>
                    <div >
                        <img className='leftArrow' src="/img/arrow.png" />
                    </div>
                    <div className='headerText'>
                        <h2 className='sentang'>
                            เส้นทาง
                        </h2>
                        <h4 className='info'>
                            หอพักนิสิตจุฬา
                        </h4>
                    </div>
                    <div >
                        <img className='heart' src="/img/heart.png" />
                    </div>
                </div>

                <div className='inform'>
                    <div className='map'>
                        <div className='blueBox'>
                            <div>
                                <img className='upArrow' src="/img/arrowup.png" />
                            </div>
                            <div className='showBox'>
                                <div className='cntSign'>

                                </div>
                                <div className='startPoint'>

                                </div>
                                <ul>
                                    <ol className='sign'>
                                        <div className='straightLine'>
                                            <img className='line' src="/img/straightLine.png" />
                                            16ป้าย
                                        </div>
                                        <div className='signBox'>

                                        </div>

                                    </ol>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}