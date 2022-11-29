import React from "react";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner";
import Navigation from "../Header/Navigation";
import Destination from "../mainContent/Destination";
import Service from "../mainContent/Service";
import WhyUs from "../mainContent/WhyUs";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Service />
      <Destination />
      <WhyUs />
      <Footer />
    </>
  );
};

export default LandingPage;
