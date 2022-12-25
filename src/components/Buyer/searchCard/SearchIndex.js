import React from "react";
import Footer from "../../Footer/Footer";
import Banner from "../../Header/Banner";
import Navigation from "../../Header/Navigation";
import CardData from "./components/CardData";
import Search from "./components/Search";
import Destination from "../../mainContent/Destination"

const Index = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Search />
      <CardData />
      <Destination />
      <Footer />
    </>
  );
};

export default Index;
