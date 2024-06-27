import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && email.endsWith('.com')) {
      setError(false);
      setShowModal(true);
    } else {
      setError(true);
    }
  };

  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='first-container'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <img src="../assets/images/icon-list.svg" alt="icon-list" />
              <span>Product discovery and building what matters</span>
            </li>
            <li>
              <img src="../assets/images/icon-list.svg" alt="icon-list" />
              <span>Measuring to ensure updates are a success</span>
            </li>
            <li>
              <img src="../assets/images/icon-list.svg" alt="icon-list" />
              <span>And much more!</span>
            </li>
          </ul>
          <div className='forms'>
            <form onSubmit={handleSubmit}>
              <div className={`label-forms ${error ? 'error' : ''}`}>
                <label htmlFor="email">Email Address</label>
                <span className={`${error ? 'visible' : ''}`}>Valid email required</span>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder='Eg: abdulmanafaliu414@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${error ? 'error' : ''}`}
              />
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </div>
        </div>
        <div className='second-container'>
          <div className='desktop-image'>
            <img src="../assets/images/illustration-sign-up-desktop.svg" alt="illustration-sign-up-desktop" />
          </div>
          <div className='mobile-image'>
            <img src="../assets/images/illustration-sign-up-mobile.svg" alt="illustration-sign-up-mobile" />
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} email={email} />
    </div>
  );
}

export default App;
