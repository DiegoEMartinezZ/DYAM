import React from "react";

const Consulting = () => {
  return (
    <main className="description-container" id="consulting">
      <h1 className="title"> Service Fee </h1>
      <ul className="strategic-container">
        <li>
          <h2 className="subtitle">Consulting Service Fee</h2>
          <p className="txt">
            One of our services is the consulting service, in which we make an
            analysis of your current situation in terms of advertising and based
            in the goal you desired we can recommend you the best strategy that
            you should develop on your own.
            <br />
            <br />
            <div id="services">
              <h4>The consulting service fee is:</h4>
              $25 USD per hour
            </div>
          </p>
        </li>

        <li>
          <h2 className="subtitle">AdOps, Creative, Website Service Fee</h2>
          <h5>We are able to provide the following services:</h5>
          <ol className="services-list">
            <li> 1. Manage digital advertising campaigns. </li>
            <li> 2. Design and create the different ad assets. </li>
            <li> 3. Create a website for your company. </li>
          </ol>
          <h5>
            Follow the brief with the instructions you send so we are align with
            you company's expectations.
          </h5>

          <h2 className="subtitle">Costs:</h2>
          <p className="txt">
            <ul className="costs-list">
              <li>
                <h4>Manage Digital Advertising Campaigns:</h4>
                7% of the Net media Budget with a minimum $250 USD per month.
              </li>
              <li>
                <h4>Design and Create Ad assets:</h4>
                $100 USD per campaign/ initiative.
              </li>
              <li>
                <h4>Create a website for your company:</h4>
                $750 USD per website.
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </main>
  );
};

export default Consulting;
