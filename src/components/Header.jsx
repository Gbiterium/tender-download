import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api';

const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate('/')
  };

  return (
    <header className="primary-bg text-white text-center py-3">
      <div className='container d-flex justify-content-between align-items-center'>
      <h1>Tender Download System</h1>
      <div>
        <div className='font-weight-bold'>Hi, {localStorage.getItem('user')}</div>
      <div className="text-danger pointer" onClick={handleLogout}>Logout</div>
      </div>
      </div>
    </header>
  );
};

export default Header;
