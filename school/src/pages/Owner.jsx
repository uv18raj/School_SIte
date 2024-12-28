// src/pages/Owner.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Owner.css';  // Importing the new CSS file

function Owner() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials check
    if (username === 'Kaizen' && password === 'kaizen@1234') {
      navigate('/dashboard'); // Redirect to Dashboard if credentials are correct
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="owner-container">
      <div className="login-form-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="login-label" htmlFor="username">Username</label>
            <input
              className="login-input"
              type="text"
              autoComplete='off'
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="login-label" htmlFor="password">Password</label>
            <input
              className="login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Conditionally rendering error message */}
          <p className={`error-message ${errorMessage ? 'show' : ''}`}>{errorMessage}</p>
          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Owner;