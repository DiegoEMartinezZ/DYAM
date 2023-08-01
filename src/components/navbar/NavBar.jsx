import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Menu from "../../assets/menu/Menu";

const NavBar = () => {
  const menuhandle = () => {
    const menuButton = document.querySelector(".menu-btn");
    const cancelButton = document.querySelector(".cancel-btn");
    const menuWindow = document.querySelector(".menu-container");
    menuButton.classList.toggle("inactive");
    cancelButton.classList.toggle("active");
    menuWindow.classList.toggle("active");
  };

  return (
    <>
      <nav className="navbar-container">
        <ul className="navbar-wrap">
          <li>
            <img
              src="/img/logo-dyam.png"
              alt="logoDYAM"
              className="logo-dyam"
            />
          </li>
          <li>
            <button onClick={menuhandle}>
              <FontAwesomeIcon icon={faXmark} className="cancel-btn" />
              <FontAwesomeIcon icon={faBars} className="menu-btn" />
            </button>
          </li>
        </ul>
        <Menu />
      </nav>
    </>
  );
};

export default NavBar;
