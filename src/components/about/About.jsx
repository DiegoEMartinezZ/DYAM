import React from "react";
import "../dyam/info.css";

const About = () => {
  return (
    <>
      <main className="description-container" id="team">
        <h1 className="title">Team</h1>
        <p className="txt">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          reprehenderit quibusdam ducimus enim commodi ipsam voluptas
          voluptates, quos quia earum velit molestias! Alias, nemo. Ex rerum
          animi minima quae harum! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, enim animi optio quae sint accusantium quas
          magnam voluptatum ducimus at nemo repellendus? Ipsa obcaecati
          explicabo, labore ipsum debitis quis distinctio!
        </p>
        <h2 className="subtitle"> Andrés Martínez </h2>
        <p className="txt">
          Colombian with 5 years of experience in digital marketing, I have been
          working from a planning perspective and ad ops, ensuring the clients
          meet their goals. I had worked within the top tier companies:{" "}
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

        <h2 className="subtitle"> Diego Martínez </h2>
        <p className="txt">
          Colombian with 4 years of experience in graphic design, I have been
          working in digital advertising for social media and in the UI/UX
          design to generate a better communication with the users. I had worked
          with:{" "}
          <em>
            MOE (Misión de Observación Electoral), TRANSMILENIO S.A. and several
            other small and big companies as a freelance designer.
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

        <h2 className="subtitle"> Nicolás Hernández </h2>
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
