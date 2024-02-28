import "./navbar.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavBarComplete from "../../assets/navBarComplete/NavBarComplete";
import Menu from "../../assets/menu/Menu";

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
      <div className="navbar-container">
        <ul className="navbar-wrap">
          <li>
            <a href="/">
              <img
                src="/img/logo-dyam.png"
                alt="logoDYAM"
                className="logo-dyam"
              />
            </a>
          </li>
          <li>
            <NavBarComplete />
          </li>
          <li>
            <button onClick={menuHandle}>
              <FontAwesomeIcon icon={faBars} className="menu-btn" />
              <FontAwesomeIcon icon={faXmark} className="cancel-btn" />
            </button>
          </li>
        </ul>
        <Menu menuHandle={menuHandle} />
      </div>
    </>
  );
};

export default NavBar;
