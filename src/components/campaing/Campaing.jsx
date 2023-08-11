import "../dyam/info.css";
import React from "react";

const Campaing = () => {
  return (
    <>
      <main className="description-container" id="campaign">
        <h1 className="title">Campaign Review & Optimization</h1>
        <ul className="campaign-container">
          <li>
            <h2 className="subtitle"> Pre-Flight </h2>
            <p className="txt">
              <em>Pre-flight meeting/ email with the setup </em> of the campaign
              so we are align with the MP and the desired strategy.
            </p>
          </li>

          <li>
            <h2 className="subtitle"> In-Flight </h2>
            <p className="txt">
              <em>Campaign check and optimizations </em>
              in order to accomplish the estimated KPI.
            </p>
          </li>

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
