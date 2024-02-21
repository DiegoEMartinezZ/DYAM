import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dyam/info.css";
import React from "react";
import {
  faArrowDown,
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
          <FontAwesomeIcon icon={faSitemap} className="team-icon" />| Campaign
          Review & Optimization
        </h1>
        <ul className="campaign-container">
          <FontAwesomeIcon icon={faPlane} />
          <li>
            <h2 className="subtitle"> Pre-Flight </h2>
            <p className="txt">
              <em>Pre-flight meeting/ email with the setup </em> of the campaign
              so we are align with the MP and the desired strategy.
            </p>
          </li>

          <FontAwesomeIcon icon={faPlaneDeparture} />
          <li>
            <h2 className="subtitle"> In-Flight </h2>
            <p className="txt">
              <em>Campaign check and optimizations </em>
              in order to accomplish the estimated KPI.
            </p>
          </li>

          <FontAwesomeIcon icon={faPlaneArrival} />
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
