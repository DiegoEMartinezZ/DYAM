import { useState } from "react";
import teamInfo from "../../resources/teamInfo.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCaretLeft,
  faCaretRight,
  faCircleCheck,
  faDiamond,
  faLaptop,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import "../dyam/info.css";

const Members = () => {
  const { members } = teamInfo[0];
  const [memberID, setMemberID] = useState(0);
  const { id, img, name, description, experience, roles } = members[memberID];

  const handleButtonToRight = () => {
    memberID < members.length - 1 && setMemberID(memberID + 1);
  };

  const handleButtonToLeft = () => {
    memberID > 0 && setMemberID(memberID - 1);
  };

  return (
    <div className="member-container">
      <li key={id} className="member-wrap">
        <img src={img} alt="member-dyam" className="members-img" />

        <h1 className="member-name"> {name} </h1>
        <p className="member-description"> {description} </p>

        <div className="member-experience">
          <ul className="member-list">
            <h3 className="member-subtitle">
              <FontAwesomeIcon icon={faPeopleGroup} className="member-icons" />
              Clients
            </h3>
            {experience.map((exp, idx) => {
              return (
                <li key={idx} className="member-clients">
                  <p>
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="list-check"
                    />
                    {exp}
                  </p>
                </li>
              );
            })}
          </ul>

          <ul className="member-list">
            <h3 className="member-subtitle">
              <FontAwesomeIcon icon={faLaptop} className="member-icons" />
              Functions
            </h3>
            {roles.map((rol, idx) => {
              return (
                <li key={idx} className="member-roles">
                  <p>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="list-check"
                    />
                    {rol}
                  </p>{" "}
                </li>
              );
            })}
          </ul>
          {/*  Slider for member */}
          <div className="member-slider">
            <button onClick={handleButtonToLeft} className="btn-slider">
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>

            <button onClick={handleButtonToRight} className="btn-slider">
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Members;
