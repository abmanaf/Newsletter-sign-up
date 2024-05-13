import React from 'react'
import "./App.css"

function App() {
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='first-container'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          
          
            <p style={{display: 'flex', alignItems: 'center'}}><img src="src/assets/images/icon-list.svg" alt="" />Product discovery and building what matters</p>
            <p style={{display: 'flex', alignItems: 'center'}}><img src="src/assets/images/icon-list.svg" alt="" />Measuring to ensure updates are a success</p>
            <p style={{display: 'flex', alignItems: 'center'}}><img src="src/assets/images/icon-list.svg" alt="" />And much more!</p>
          
          <div className='forms'>
            <label htmlFor="email">Email Address</label> <br /> <br />
            <input type="email" name="email" id="email" placeholder='abdulmanafaliu414@gmail.com' />
            <button>Subscribe to monthly newsletter</button>
          </div>
        </div>
        <div className='second-container'>
          <img src="/src/assets/images/illustration-sign-up-desktop.svg" alt="background" />  
        </div>
      </div>
    </div>
  );
}

export default App