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
      console.log("Valid Email required");
    }

  };

  return (
    <div className='main-container'>
      <div className='sub-container'>
        <div className='first-container'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <img src="../assets/images/icon-list.svg" alt="icon-list" />Product discovery and building what matters
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <img src="../assets/images/icon-list.svg" alt="icon-list" />Measuring to ensure updates are a success
          </p>
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <img src="../assets/images/icon-list.svg" alt="icon-list" />And much more!
          </p>

          <div className='forms'>
            <form action="" onSubmit={handleSubmit}>
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
          <picture className="img" id="right">
            <source className="img-desk" media="(min-width: 769px)" srcSet="../assets/images/illustration-sign-up-desktop.svg" />
            <img src="../assets/images/illustration-sign-up-mobile.svg" alt="illustration-sign-up-mobile" />
          </picture>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)} email={email} />
    </div>
  );
}

export default App;
