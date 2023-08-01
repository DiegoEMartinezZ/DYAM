import "./App.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Dyam from "./components/dyam/Dyam";
import About from "./components/about/About";
import Strategic from "./components/strategic/Strategic";
import Campaing from "./components/campaing/Campaing";
import Reporting from "./components/reporting/Reporting";
import Design from "./components/design/Design";
import Consulting from "./components/consulting/Consulting";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Dyam />
      <About />
      <Strategic />
      <Campaing />
      <Reporting />
      <Design />
      <Consulting />
      <Footer />
    </>
  );
}

export default App;
