import React from "react";
import Button from "../UI/MainButton";
import classes from "./css/Banner.module.css";
import logo from "./img/logo2.png";

const Banner = () => {
  return (
    <header className={classes.banner}>
      <div className="container px-lg-5 mt-2">
        <div className="row">
          <div className="col-md-6">
            <div className={classes.bannerTitles}>
              <h1>Pesan Tiket Pesawat Sambil Rebahan Aja!</h1>
              <p>
                Selamat datang di Let's Flight Indonesia. Kami adalah platform
                beli tiket pesawat secara online tanpa harus ribet. Selalu siap
                melayani kebutuhanmu untuk pesan tiket pesawat selama 24 jam.
              </p>
              <Button>Cari Tiket</Button>
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
  );
};

export default Banner;
