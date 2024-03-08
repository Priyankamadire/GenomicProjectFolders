import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button
        type="button"
        className="navbar-toggler btn btn-light"
        data-bs-toggle="collapse"
        data-bs-target="#menubar"
      >
        <span className="navbar-toggler-icon btn btn-light" />
      </button>
      <div className="collapse navbar-collapse text-light" id="menubar">
        <ul className="navbar-nav col">
          <li className="nav-item col">
            <Link className="nav-link bi bi-house-fill text-light" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-ticket-fill text-light"
              to="/about"
            >
              ABOUT{" "}
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-sign-turn-right-fill text-light"
              to="/login"
            >
              LOGIN/SIGN_UP
            </Link>
          </li>
          <li className="nav-item col">
            <Link
              className="nav-link bi bi-person-lines-fill text-light"
             to="/contact"
            >
              CONTACT_US{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
