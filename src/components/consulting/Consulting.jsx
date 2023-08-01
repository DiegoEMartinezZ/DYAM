import React from "react";

const Consulting = () => {
  return (
    <main className="description-container">
      <h1 className="title"> Service Fee </h1>
      <ul className="strategic-container">
        <li>
          <h2 className="subtitle"> Consulting Service Fee </h2>
          <p className="txt">
            One of our services is the consulting service, in which we make an
            analysis of your current situation in terms of advertising and based
            in the goal you desired we can recommend you the best strategy that
            you should develop on your own.
            <br />
            <br />
            The consulting service fee is: $25 USD per hour
          </p>
        </li>

        <li>
          <h2 className="subtitle"> AdOps, Creative, Website Service Fee </h2>
          <h4 className="subtitle">
            We are able to provide the following services:
          </h4>
          <ol className="services-list">
            <li> Manage digital advertising campaigns. </li>
            <li> Design and create the different ad assets. </li>
            <li> Create a website for your company. </li>
          </ol>
          <p className="txt">
            Follow the brief with the instructions you send so we are align with
            you company's expectations.
          </p>

          <h4 className="subtitle">Costs:</h4>
          <ul className="costs-list">
            <li>
              Manage Digital Advertising Campaigns: 7% of the Net media Budget
              with a minimum $250 USD per month.
            </li>
            <li>
              Design and Create Ad assets: $100 USD per campaign/ initiative.
            </li>
            <li> Create a website for your company: $750 USD per website.</li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default Consulting;
