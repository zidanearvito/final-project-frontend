import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Banner from "../Header/Banner";
import Navigation from "../Header/Navigation";
import Destination from "../mainContent/Destination";
import Service from "../mainContent/Service";
import WhyUs from "../mainContent/WhyUs";
import LoadPage from "../UI/LoadPage";

const LandingPage = () => {
  const [load, setLoad] = useState(true);

  setInterval(function () {
    setLoad(false);
  }, 700);

  return (
    <>
      {load ? (
        <LoadPage />
      ) : (
        <>
          <Navigation />
          <Banner />
          <Service />
          <Destination />
          <WhyUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default LandingPage;
