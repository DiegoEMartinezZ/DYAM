import {
  faBezierCurve,
  faLaptopCode,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Design = () => {
  return (
    <>
      <main className="description-container" id="design">
        <h1 className="title">
          <FontAwesomeIcon icon={faPenNib} className="team-icon" />| Design
        </h1>
        <ul className="design-container">
          <FontAwesomeIcon icon={faLaptopCode} className="icons-steps" />
          <li>
            <h2 className="subtitle"> UI/UX Design </h2>
            <p className="txt">
              In terms of UI/UX design, there must be a simple and intuitive
              communication with customers that relates to the product that is
              being offered and also with the design of where the customer is
              located.
            </p>
          </li>

          <FontAwesomeIcon icon={faBezierCurve} className="icons-steps" />
          <li>
            <h2 className="subtitle"> Creative Design </h2>
            <p className="txt">
              Going hand in hand with simplicity and intuitiveness, it will take
              into account the organization, hierarchies, color theory and
              implementation of design elements that are trendy for each of the
              design pieces that are required.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Design;
