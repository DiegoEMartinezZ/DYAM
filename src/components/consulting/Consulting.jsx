import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Consulting = () => {
  return (
    <main className="description-container" id="consulting">
      <h1 className="title">
        <FontAwesomeIcon icon={faCreditCard} className="team-icon" />| Service
        Fee
      </h1>
      <ul className="consulting-container">
        <li>
          <h2 className="subtitle">Consulting Service Fee</h2>
          <h4 className="txt">
            <em>One of our services is the consulting service, </em>
            in which we make an analysis of your current situation in terms of
            advertising and based in the goal you desired we can recommend you
            the best strategy that you should develop on your own.
            <br />
            <br />
            <div id="services">
              <p>The consulting service fee is:</p>
              $25 USD per hour
            </div>
          </h4>
        </li>

        <li>
          <h2 className="subtitle">AdOps, Creative, Website Service Fee</h2>
          <h5>We are able to provide the following services:</h5>
          <ol className="services-list">
            <li> 1. Manage digital advertising campaigns. </li>
            <li> 2. Design and create the different ad assets. </li>
            <li> 3. Create a website for your company. </li>
          </ol>
          <h2 className="subtitle">
            Follow the brief with the instructions you send so we are align with
            you company's expectations.
          </h2>

          <h2 className="subtitle">Costs:</h2>
          <h4 className="txt">
            <ul className="costs-list">
              <li>
                Manage Digital Advertising Campaigns: 7% of the Net media Budget
                with a minimum $250 USD per month.
              </li>
              <li>
                Design and Create Ad assets: $100 USD per campaign/ initiative.
              </li>
              <li>Create a website for your company: $750 USD per website.</li>
            </ul>
          </h4>
        </li>
      </ul>
    </main>
  );
};

export default Consulting;
