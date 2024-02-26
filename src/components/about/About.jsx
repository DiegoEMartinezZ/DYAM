import React from "react";
import "../dyam/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Members from "../members/Members";

const About = () => {
  return (
    <>
      <main className="description-container" id="team">
        <h1 className="title">
          <FontAwesomeIcon icon={faUserGroup} className="team-icon" /> | Team{" "}
        </h1>
        <p className="txt">
          D&AM partnered with a fashion retailer seeking to expand its online
          footprint. The digital media team meticulously crafted a strategy that
          combined visually captivating social media content with an strategic
          approach.
        </p>
        <Members />
      </main>
    </>
  );
};

export default About;
