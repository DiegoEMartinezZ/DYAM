import {
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./rrss.css";
import React from "react";

const Rrss = () => {
  return (
    <>
      <h3 className="footer-title"> Follow us </h3>

      <ul className="rrss-list">
        <li>
          <FontAwesomeIcon icon={faGoogle} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
      </ul>
    </>
  );
};

export default Rrss;
