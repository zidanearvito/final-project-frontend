import React, { useEffect } from "react";
import Footer from "../../Footer/Footer";
import Banner from "../../Header/Banner";
import Navigation from "../../Header/Navigation";
import CardData from "./components/CardData";
import Search from "./components/Search";
import Destination from "../../mainContent/Destination";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const token = window.localStorage.getItem("accessToken");
  const history = useNavigate();
  const { data } = useSelector((state) => state.ticketReducer);
  useEffect(() => {
    if (!token) {
      history("/login");
    }
  }, [ history, token]);
  return (
    <>
      {token && (
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
