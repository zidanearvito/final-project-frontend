import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/MainButton";
import Modal from "../UI/Modal";
import classes from "./css/Banner.module.css";
import logo from "./img/logo2.png";

const Banner = () => {
  const token = window.localStorage.getItem("accessToken");
  const history = useNavigate();
  const [error, setError] = useState("");

  const modalError = () => {
    if (!token) {
      setError({
        title: "Login",
        message: "Anda Belum Login, Silahkan Login Dulu",
      });
    } else {
      history("/search");
    }
  };

  const errorHandler = () => {
    setError(history("/login"));
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <header className={classes.banner}>
        <div className="container px-lg-5 mt-2">
          <div className="row">
            <div className="col-md-6">
              <div className={classes.bannerTitles}>
                <h1>Pesan Tiket Pesawat Sambil Rebahan Aja!</h1>
                <p>
                  Selamat datang di Let's Flight Indonesia. Kami adalah platform
                  beli tiket pesawat secara online tanpa harus ribet. Selalu
                  siap melayani kebutuhanmu untuk pesan tiket pesawat selama 24
                  jam.
                </p>
                {window.location.pathname === "/" && (
                  <Button onClick={modalError}>Cari Tiket</Button>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className={classes.logoBanner}>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
