import "./menu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Menu = ({ menuHandle }) => {
  const planExtendedMenu = () => {
    const planExtended = document.querySelector(".plan-list");
    const planButton = document.querySelector("button.plan-button");
    planExtended.classList.toggle("active");
    planButton.classList.toggle("active-button");
  };

  const priceExtendedMenu = () => {
    const priceExtended = document.querySelector(".price-list");
    const priceButton = document.querySelector("button.price-button");
    priceExtended.classList.toggle("active");
    priceButton.classList.toggle("active-button");
  };

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
          <li>
            <div>
              Plans
              <button onClick={planExtendedMenu} className="plan-button">
                <FontAwesomeIcon icon={faSortDown} />
              </button>
            </div>
            <ul className="plan-list">
              <Link to="#approach" className="options" onClick={menuHandle}>
                <li> Strategic Approach </li>
              </Link>

              <Link to="#campaign" className="options" onClick={menuHandle}>
                <li> Campaign Review </li>
              </Link>

              <Link to="#reporting" className="options" onClick={menuHandle}>
                <li> Campaing Reporting </li>
              </Link>

              <Link to="#design" className="options" onClick={menuHandle}>
                <li> Design </li>
              </Link>
            </ul>
          </li>
          <li>
            <div>
              Prices
              <button onClick={priceExtendedMenu} className="price-button">
                <FontAwesomeIcon icon={faSortDown} />
              </button>
            </div>
            <ul className="price-list">
              <Link to="#consulting" className="options" onClick={menuHandle}>
                <li> Consulting Fee </li>
              </Link>
              <Link to="#services" className="options" onClick={menuHandle}>
                <li> AdOps, Creative, Website Service Fee </li>
              </Link>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
