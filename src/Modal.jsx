// Modal.js
import React from 'react';
import './Modal.css';

function Modal({ show, onClose, email }) {
  if (!show) {
    return null;
  }
 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='img-thanks' style={{ display: 'flex', alignItems: 'center', fontSize: '40em' }}>
            <img src="src/assets/images/icon-list.svg" alt="icon-list" />
        </div>
        <div style={{textAlign: 'start'}}>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to <br /> <strong>{email}</strong>  Please open it <br /> and click the button inside to confirm your <br /> subscription.</p>
        </div>
        <button onClick={onClose} className="modal-button">Dismiss Message</button>
      </div>
    </div>
  );
}

export default Modal;
