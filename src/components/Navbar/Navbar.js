import React from 'react';
import './Navbar.scss';
import logo from './../../assets/prs-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Navbar Links */}
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/singleservice">Service</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>

              {/* Navbar Button */}
              <div className="theme-btn">
                <Link to="/contact">Book appointment</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;