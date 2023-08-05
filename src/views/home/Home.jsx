import React from "react";
import Dyam from "../../components/dyam/Dyam";
import About from "../../components/about/About";
import Strategic from "../../components/strategic/Strategic";
import Campaing from "../../components/campaing/Campaing";
import Reporting from "../../components/reporting/Reporting";
import Design from "../../components/design/Design";
import Consulting from "../../components/consulting/Consulting";

const Home = () => {
  return (
    <>
      <Dyam />
      <About />
      <Strategic />
      <Campaing />
      <Reporting />
      <Design />
      <Consulting />
    </>
  );
};

export default Home;
