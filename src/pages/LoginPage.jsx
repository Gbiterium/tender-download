import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginPage.css';
import { login } from '../api';

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login(username, password)) {
      navigate('/tenders')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="page-wrapper login">
      <div className="card">
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3 mb-3">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control py-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn primary-bg text-white btn-block py-2 px-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
