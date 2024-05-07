import PropTypes from 'prop-types';
import { useState } from 'react';

import { Link, Switch } from 'react-router-dom';

function Navbar({ title, about, mode, toggleMode }) {
  const [darkMode, setDarkMode] = useState(mode === 'dark');

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
    toggleMode(); // Call the toggleMode function passed from App.js
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" checked={darkMode} onChange={handleToggleMode} id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${darkMode ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func.isRequired
};

export default Navbar;
