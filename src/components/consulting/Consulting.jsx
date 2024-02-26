import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Consulting = () => {
  return (
    <main className="description-container" id="consulting">
      <h1 className="title">
        <FontAwesomeIcon icon={faCreditCard} className="team-icon" />| Service
        Fee
      </h1>
      <ul className="consulting-container">
        <li className="consulting-wrap">
          <FontAwesomeIcon icon={faCommentDots} className="icons-steps" />
          <h2 className="subtitle">Consulting Service Fee</h2>
          <p className="txt">
            One of our services is the consulting service, in which we make an
            analysis of your current situation in terms of advertising and based
            in the goal you desired we can recommend you the best strategy that
            you should develop on your own.
            <br />
            <br />
            <div className="consulting-service-fee-container">
              <p className="consulting-service-fee">
                The consulting service fee is:{" "}
              </p>
              <p className="fee">$25 USD per hour</p>
            </div>
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Consulting;
