import {
  faBezierCurve,
  faLaptopCode,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Design = () => {
  return (
    <>
      <main className="description-container" id="design">
        <h1 className="title">
          <FontAwesomeIcon icon={faPenNib} className="team-icon" />| Design
        </h1>
        <ul className="design-container">
          <FontAwesomeIcon icon={faLaptopCode} />
          <li>
            <h2 className="subtitle"> UI/UX Design </h2>
            <p className="txt">
              <em>
                In terms of UI/UX design, there must be a simple and intuitive
                communication with customers that relates to the product that is
                being offered and also with the design of where the customer is
                located.{" "}
              </em>
              Knowing what information can be obtained, where to ask for help
              and how to get the product, without obstacles that interrupt the
              path of the interface.
            </p>
          </li>

          <FontAwesomeIcon icon={faBezierCurve} />
          <li>
            <h2 className="subtitle"> Creative Design </h2>
            <p className="txt">
              Going hand in hand with simplicity and intuitiveness, it will take
              into account the organization, hierarchies, color theory and
              implementation of design elements that are trendy for each of the
              design pieces that are required.{" "}
              <em>
                Each piece works both as a unit among all of them and
                individually, without distorting the information that is being
                transmitted or hindering the initial purpose of the design.
              </em>
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Design;
