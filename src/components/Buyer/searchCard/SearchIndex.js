import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Banner from "../../Header/Banner";
import Navigation from "../../Header/Navigation";
import CardData from "./components/CardData";
import Search from "./components/Search";
import Destination from "../../mainContent/Destination";
import { useSelector } from "react-redux";
import LoadPage from "../../UI/LoadPage";

const Index = () => {
  const { data } = useSelector((state) => state.ticketReducer);
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
          <Search />
          {data && <CardData />}
          <Destination />
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
