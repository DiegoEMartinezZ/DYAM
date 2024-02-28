import Rrss from "../RRSS/Rrss";
import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <a href="/">
          <img src="/img/logo-dyam.png" alt="logo-dyam" className="logo-dyam" />
        </a>
        <section className="footer-info">
          <h3 className="footer-title"> Contact us </h3>
          <ul className="footer-list">
            <li>hello@damdigitalmedia.com</li>
            <li>Bogotá - Colombia</li>
          </ul>
        </section>
        <Rrss />
        <h1 className="copyright"> &copy; D&AM 2024. All Rights Reserved. </h1>
      </footer>
    </>
  );
};

export default Footer;
