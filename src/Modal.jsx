import React from 'react';
import './Modal.css';

function Modal({ show, onClose, email }) {
  if (!show) {
    return null;
  }
 
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className='img-thanks' style={{ display: 'flex', alignItems: 'center' }}>
            <img src="../assets/images/icon-list.svg" alt="icon-list" />
        </div>
        <div style={{textAlign: 'start'}}>
            <h1 style={{fontSize: '3em', marginBottom: '0.3em'}}>Thanks for subscribing!</h1>
            <p style={{fontSize: '14px'}}>A confirmation email has been sent to  <strong>{email}</strong>  Please open it  and click the button inside to confirm your subscription.</p>
        </div>
        <button onClick={onClose} className="modal-button">Dismiss Message</button>
      </div>
    </div>
  );
}

export default Modal;
