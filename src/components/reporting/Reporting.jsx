import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Reporting = () => {
  return (
    <>
      <main className="description-container" id="reporting">
        <h1 className="title">
          <FontAwesomeIcon icon={faClipboardCheck} className="team-icon" />|
          Campaign Reporting
        </h1>
        <ul className="reporting-container">
          <li>
            <p className="txt">
              <em>Campaign Reporting within Google Data Studio Dashboard </em>
              in order to easily check and present the campaign results to the
              clients.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Reporting;
