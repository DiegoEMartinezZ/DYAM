import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dyam/info.css";
import React from "react";
import {
  faPlane,
  faPlaneArrival,
  faPlaneDeparture,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

const Campaing = () => {
  return (
    <>
      <main className="description-container" id="campaign">
        <h1 className="title">
          <FontAwesomeIcon icon={faSitemap} className="team-icon" />| Review &
          Optimization
        </h1>
        <ul className="campaign-container">
          <FontAwesomeIcon icon={faPlane} className="icons-steps" />
          <li>
            <h2 className="subtitle"> Pre-Flight </h2>
            <p className="txt">
              <em>Pre-flight meeting/ email with the setup </em> of the campaign
              so we are align with the MP and the desired strategy.
            </p>
          </li>

          <FontAwesomeIcon icon={faPlaneDeparture} className="icons-steps" />
          <li>
            <h2 className="subtitle"> In-Flight </h2>
            <p className="txt">
              <em>Campaign check and optimizations </em>
              in order to accomplish the estimated KPI.
            </p>
          </li>

          <FontAwesomeIcon icon={faPlaneArrival} className="icons-steps" />
          <li>
            <h2 className="subtitle"> Post-Flight </h2>
            <p className="txt">
              <em>Campaign post buy report</em>, with comparison between
              executed and planned.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Campaing;
