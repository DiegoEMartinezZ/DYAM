import React from "react";
import "../dyam/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faUserGroup } from "@fortawesome/free-solid-svg-icons";
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
          footprint.{" "}
          <strong>
            The digital media team meticulously crafted a strategy that combined
            visually captivating social media content with an strategic
            approach.
          </strong>{" "}
          <br />
          <br />
          This approach not only increased brand awareness but also drove a
          substantial boost in online sales. The team's unwavering focus on the
          client's preferences and values allowed for seamless integration of
          their{" "}
          <strong>
            {" "}
            vision into the digital campaign, forging a lasting partnership.{" "}
          </strong>
          <FontAwesomeIcon icon={faAngleDown} className="arrow-down" />
        </p>

        <Members />
      </main>
    </>
  );
};

export default About;
