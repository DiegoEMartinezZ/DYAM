import React from "react";
import "../dyam/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faDownLong } from "@fortawesome/free-solid-svg-icons";

const Strategic = () => {
  return (
    <>
      <main className="description-container" id="approach">
        <h1 className="title">
          <FontAwesomeIcon icon={faChessKnight} className="team-icon" />|
          Strategic Approach & Planning
        </h1>
        <ul className="strategic-container">
          <FontAwesomeIcon icon={faDownLong} className="icons-steps" />

          <li>
            <h2 className="subtitle"> Understand client needs</h2>
            <p className="txt">
              Based on the client needs our team will find the best way to
              choose and align the KPI's to accomplish the business objective.
            </p>
            <FontAwesomeIcon icon={faDownLong} className="icons-steps" />
          </li>

          <li>
            <h2 className="subtitle">
              Create the MP to reflect the Strategy proposed
            </h2>
            <p className="txt">
              We make the strategy real by designing a Media Plan with the
              perfect Media Mix of channels to accomplish the business goal.
            </p>
            <FontAwesomeIcon icon={faDownLong} className="icons-steps" />
          </li>

          <li>
            <h2 className="subtitle"> Propose the Best Strategy</h2>
            <p className="txt">
              Once the KPIs has been selected we will start to propose the best
              Digital media strategy to accomplish that KPI across the
              conversion funnel.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Strategic;
