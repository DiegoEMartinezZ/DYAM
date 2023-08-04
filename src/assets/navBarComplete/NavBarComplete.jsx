import "./navBarComplete.css";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavBarComplete = () => {
  return (
    <>
      <nav className="navbar-complete-container">
        <ul className="navbar-complete-list">
          <Link to="#about" className="options">
            <li> About us </li>
          </Link>
          <Link to="#team" className="options">
            <li>Team</li>
          </Link>
          <Link to="#approach" className="options">
            <li> Plans</li>
          </Link>
          <Link to="#consulting" className="options">
            <li> Price </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBarComplete;
