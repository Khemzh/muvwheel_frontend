import './Home.css';
import React, { useState } from 'react';
// import {button} from 'react';

function App() {
const [val, setVal] = useState('ต้องการจะไปที่ไหน ?')

  return (
    <div className="App">
      <div className='bg'>
        <div className='header'>
            <img className='photo' src ="/img/menu.png" alt=" " />  
            <input value={val} className='txt' />
            
        </div>
    {/* <button onPress={console.log('hi')}>click me!</button> */}

      </div>
      
      
    </div>
  );
}

export default App;