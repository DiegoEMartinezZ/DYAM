import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Menu from "../../assets/menu/Menu";
import "./navbar.css";

const NavBar = () => {
  const menuHandle = () => {
    const menuButton = document.querySelector(".menu-btn");
    const cancelButton = document.querySelector(".cancel-btn");
    const menuWindow = document.querySelector(".menu-container");
    const body = document.querySelector("body");
    menuButton.classList.toggle("inactive");
    cancelButton.classList.toggle("active");
    menuWindow.classList.toggle("active");
    body.classList.toggle("stop");
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
            <button onClick={menuHandle}>
              <FontAwesomeIcon icon={faXmark} className="cancel-btn" />
              <FontAwesomeIcon icon={faBars} className="menu-btn" />
            </button>
          </li>
        </ul>
        <Menu menuHandle={menuHandle} />
      </nav>
    </>
  );
};

export default NavBar;
