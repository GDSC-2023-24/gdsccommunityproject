import React from 'react';
import Navbar from "./Components/common/Navbar"
import Rightside from './Components/common/Rightside';
import './App.css';
import Signupbtn from './Components/common/Signupbtn'
import Createaccbtn from './Components/common/Createaccbtn'
import { Theme } from '@radix-ui/themes';
import Signinbtn from './Components/common/Signinbtn';
function App() {
  return (
    <div className='App'>
      
      <Navbar />
      <div className="container">
       <div className="left-side">
          <div class="nowtext">
            <h2>Happening Now</h2>
            <p>Join us today</p>
          </div>
          <Signupbtn />
          <div className='divider'>
            <div className="divider_left"></div>
            <p>or</p>
            <div className="divider_right"></div>

          </div>
          <Createaccbtn />
          <div className='alreadyacc'>
            <p>Already have an account?</p>
            <Signinbtn/>
          </div>
          
        </div>
        <Rightside />
      </div>
      
      
   </div>

    
  );
}

export default App;
