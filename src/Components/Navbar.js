import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Firenet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/chart">Chart</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/temperature">Temperature</Link>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="nav-link btn-link" onClick={handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
