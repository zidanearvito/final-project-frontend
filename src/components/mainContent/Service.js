import React from "react";
import classes from "./css/Service.module.css";
import imgServ from "./img/service.png";
import imgServChek from "./img/ceklis.png";

const Service = () => {
  return (
    <div className="selection bg-grey" id="ourService">
      <div className="container px-lg-5">
        <div className="row">
          <div className="col-md-6 px-5">
            <div className={classes.service}>
              <img src={imgServ} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="serv-detail px-lg-4">
              <h2>Get your ticket for any kind of trip in (Lokasimu)!</h2>
              <p>
                Pesan tiket pesawat sambil rebahan aja bersama let's flight
                indonesia harga lebih murah dibandingkan yang lain, tanpa harus
                beranjak dari tempat tidurmu, tiket pesawat sudah berada di
                tanganmu.
              </p>
              <div className={classes.servComp}>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Pesan tiket pesawat sambil rebahan aja
                </p>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
