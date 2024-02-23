import React from "react";
import "./info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Dyam = () => {
  return (
    <>
      <main className="description-container" id="about">
        <div className="goal-dyam-container">
          <img src="/img/meeting.jpg" alt="DYAMmeeting" className="imgs-dyam" />
          <p className="goal-dyam-txt">
            <FontAwesomeIcon icon={faGlobe} className="icons" />
            In D&AM Digital Media our core focus lies in delivering a
            comprehensive range of services that encompass every aspect of the
            digital sphere.
            <br />
            <br />
            From expert web design and development, innovative social media
            management and result-oriented pay-per-click (PPC) advertising
            campaigns.
          </p>
        </div>
      </main>
    </>
  );
};

export default Dyam;
