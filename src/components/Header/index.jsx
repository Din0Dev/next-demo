import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthentication } from 'providers/AuthenticationProvider';

const Header = (props) => {
  const { t } = useTranslation();
  const { logout } = useAuthentication();

  //! Function
  const onLogout = () => {
    logout();
  };

  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
