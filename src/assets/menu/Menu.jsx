import React from "react";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <>
      <section className="menu-container">
        <ul className="menu-list">
          <li> About us </li>
          <li>Team</li>
          <li>
            <div>
              Plans
              <FontAwesomeIcon
                icon={faSortDown}
                className="menu-arrow"
                id="arrow-01"
              />
            </div>
            <ul className="specific-list">
              <li> Strategic Approach </li>
              <li> Campaign Review </li>
              <li> Campaing Reporting </li>
              <li> Design </li>
            </ul>
          </li>
          <li>
            <div>
              Prices
              <FontAwesomeIcon
                icon={faSortDown}
                className="menu-arrow"
                id="arrow-02"
              />
            </div>
            <ul className="specific-list">
              <li> Consulting Fee </li>
              <li> AdOps, Creative, Website Service Fee </li>
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
