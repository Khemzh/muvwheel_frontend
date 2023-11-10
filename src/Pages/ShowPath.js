import './ShowPath.css';
import React, { useState,useEffect } from 'react';


function App() {


  return (
    <div className="App">
      <div className='bg'>
         <div className='header'>
            <div className='leftArrow'>
              <img src="/img/arrow.png"/>
            </div>
            <div className='headerText'>
                <h2>
                  เส้นทาง
                </h2>
                <h4>
                  หอพักนิสิตจุฬา
                </h4>
            </div>
            <div className='heart'>
              <img src="/img/heart.png"/>
            </div>
         </div>
      </div>
      
    </div>
  );
}

export default App;