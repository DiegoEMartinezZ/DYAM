import React from "react";
import "../dyam/info.css";

const About = () => {
  return (
    <>
      <main className="description-container">
        <h1 className="title"> Team </h1>
        <p className="txt">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          reprehenderit quibusdam ducimus enim commodi ipsam voluptas
          voluptates, quos quia earum velit molestias! Alias, nemo. Ex rerum
          animi minima quae harum! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, enim animi optio quae sint accusantium quas
          magnam voluptatum ducimus at nemo repellendus? Ipsa obcaecati
          explicabo, labore ipsum debitis quis distinctio!
        </p>
        <h2 className="subtitle"> Andres Martinez </h2>
        <p className="txt">
          Colombian with 5 years of experience in digital marketing, I have been
          working from a planning perspective and ad ops, ensuring the clients
          meet their goals. I had worked within the top tier companies: Hylink,
          Group M, Mediamath, Accenture and Publicis Groupe.
          <br />
          <br />
          I love spending my free time reading (I love romantic books and
          philosophy), writing, doing exercise at the GYM, playing soccer and
          playing video games.a
          <br />
          <br />
          Also, I love traveling and get to know new places in which we can meet
          different people.
        </p>
        <h4 className="roles"> Roles & Responsabilities</h4>
        <ul className="roles-list">
          <li> Strategy & Planning </li>
          <li> Ad Ops/ Campaign manager </li>
          <li> Reporting & Insight </li>
        </ul>
        <h2 className="subtitle"> Diego Martinez </h2>
        <p className="txt">
          Colombian with 4 years of experience in graphic design, I have been
          working in digital advertising for social media and in the UI/UX
          design to generate a better communication with the users. I had worked
          with: MOE (Misión de Observación Electoral) and TRANSMILENIO S.A.
          <br />
          <br /> I love spending my free time drawing, hanging out with my
          friends, but most of my time I spend on the computer improving my
          frontend skills and playing video games.
          <br />
          <br />
          Knowledge in HTML, CSS, Js, APIs. My favorite framework for frontend
          projects is React Js.
        </p>
        <h4 className="roles"> Roles & Responsabilities</h4>
        <ul className="roles-list">
          <li> UX/ UI Designer </li>
          <li> Creative Designer </li>
          <li> Full Stack Developer </li>
        </ul>
      </main>
    </>
  );
};

export default About;
