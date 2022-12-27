import React from "react";
import Navigation from "../../Header/Navigation";
import Footer from "../../Footer/Footer"
import PaymentConfirm from "./components/PaymentConfim";

const ConfirmIndex = () => {
  return (
    <>
      <Navigation />
      <PaymentConfirm />
      <Footer />
    </>
  );
};

export default ConfirmIndex;
