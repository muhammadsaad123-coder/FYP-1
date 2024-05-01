import React from 'react';
import './Modal.css';
import searchLogo from './searchlogo.png';

function LoginModal({ onClose, onSignup }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={searchLogo} alt="Logo" className="modal-logo"/>
        <h1 className='logintext'>Login</h1>
        <form onSubmit={event => {
          event.preventDefault();
          // Logic to handle login
          console.log('Login submitted');
        }}>
          <input type="email" placeholder="Enter your email" required className="modal-input"/>
          <input type="password" placeholder="Enter your password" required className="modal-input"/>
          <button type="submit" className="modal-button">Login</button>
        </form>
        <button onClick={onSignup} className="modal-button">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginModal;
