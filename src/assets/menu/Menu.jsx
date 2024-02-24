import "./menu.css";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Menu = ({ menuHandle }) => {
  return (
    <>
      <section className="menu-container">
        <ul className="menu-list">
          <Link to="#about" className="options" onClick={menuHandle}>
            <li> About us </li>
          </Link>
          <Link to="#team" className="options" onClick={menuHandle}>
            <li>Team</li>
          </Link>
          <Link to="#approach" className="options" onClick={menuHandle}>
            <li> Plans</li>
          </Link>
          <Link to="#consulting" className="options" onClick={menuHandle}>
            <li> Price </li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Menu;
