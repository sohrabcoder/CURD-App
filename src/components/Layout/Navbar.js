import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">CURD-App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Contact">Contact</a>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/New">New</a>
        </li> */}
            </ul>
            <Link className="btn btn-outline-light" to="/AddUser">Add User</Link>
          </div>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar;