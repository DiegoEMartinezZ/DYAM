import { useState } from "react";
import teamInfo from "../../resources/teamInfo.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "../dyam/info.css";

const Members = () => {
  const { members } = teamInfo[0];
  const [memberID, setMemberID] = useState(0);
  const { id, name, description, experience, roles } = members[memberID];

  const prueba = () => {
    console.log("estas oprimiendo el botond e prueb");
  };

  return (
    <div>
      <li key={id}>
        <button onClick={prueba} className="prueba">
          prueba
        </button>
        <h1 className="exp-title"> {name} </h1>
        <h5 className="exp-position"> {description} </h5>
        <h5 className="exp-years"> {experience} </h5>
        <br />
        <p className="exp-txt"> {roles} </p>
        <ul>
          {roles.map((rol, idx) => {
            return (
              <li key={idx}>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} /> {""}
                  {rol}
                </p>{" "}
              </li>
            );
          })}
        </ul>
        <br />
      </li>
      <section>
        <button
          onClick={() => memberID > 0 && setMemberID(memberID - 1)}
          className="btn"
        >
          Izquierda
        </button>
        <p className="id-exp">{memberID + 1}</p>
        <button
          onClick={() =>
            memberID < members.length - 1 && setMemberID(memberID + 1)
          }
        >
          derecha
        </button>
      </section>
    </div>
  );
};

export default Members;
