import React from "react";
import "../dyam/info.css";

const About = () => {
  return (
    <>
      <main className="description-container" id="team">
        <h1 className="title">Team</h1>
        <p className="txt">
          D&AM partnered with a fashion retailer seeking to expand its online
          footprint.{" "}
          <strong>
            The digital media team meticulously crafted a strategy that combined
            visually captivating social media content with an strategic
            approach.
          </strong>{" "}
          This approach not only increased brand awareness but also drove a
          substantial boost in online sales. The team's unwavering focus on the
          client's preferences and values allowed for seamless integration of
          their{" "}
          <strong>
            {" "}
            vision into the digital campaign, forging a lasting partnership.{" "}
          </strong>
        </p>
        <h2 className="subtitle">
          <strong>Andrés Martínez</strong>
        </h2>
        <p className="txt">
          Colombian with experience in digital marketing, been working from a
          planning perspective and ad ops, ensuring the clients meet their
          goals. Had worked within the top tier companies:{" "}
          <em>Hylink, Group M, Mediamath, Accenture and Publicis Groupe.</em>
          <div className="roles-container">
            <h4 className="roles"> Roles & Responsabilities</h4>
            <ul className="roles-list">
              <li> Strategy & Planning </li>
              <li> Ad Ops/ Campaign manager </li>
              <li> Reporting & Insight </li>
            </ul>
          </div>
        </p>

        <h2 className="subtitle">
          <strong>Diego Martínez</strong>
        </h2>
        <p className="txt">
          Colombian with experience in graphic design, been working in digital
          advertising for social media and in the UI/UX design to generate a
          better communication with the users. Had worked with:{" "}
          <em>
            Misión de Observación Electoral - MOE, TransMilenio and several
            small and big companies as a freelance designer.
          </em>{" "}
          Knowledge in HTML, CSS, Js, APIs and React JS.
          <div className="roles-container">
            <h4 className="roles"> Roles & Responsabilities</h4>
            <ul className="roles-list">
              <li> UX/ UI Designer </li>
              <li> Creative Designer </li>
              <li> Full Stack Developer </li>
            </ul>
          </div>
        </p>

        <h2 className="subtitle">
          <strong>Nicolás Hernández</strong>
        </h2>
        <p className="txt">
          Colombian professional excelling in campaign orchestration, strategic
          planning, and client engagement across diverse roles. Proven
          experience in sales and Tech Consultancy. Skilled in collaborative
          alignment with internal stakeholders and seamless strategy execution.
          My versatile background includes Top companies such as{" "}
          <em>Globant, Oracle, SAP, and Tecno Mobile - Transsion Holdings.</em>
          <div className="roles-container">
            <h4 className="roles"> Roles & Responsabilities</h4>
            <ul className="roles-list">
              <li> Lead Generation and Prospecting </li>
              <li> Account Management </li>
              <li> Internal strategic management </li>
            </ul>
          </div>
        </p>
      </main>
    </>
  );
};

export default About;
