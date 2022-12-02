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
              <h2>Dapatkan Tiket Anda Untuk Segala Jenis Penerbangan</h2>
              <p>
                Pesan tiket pesawat sambil rebahan aja bersama Let's Flight
                Indonesia harga lebih murah dibandingkan yang lain, tanpa harus
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
                  Pesan tiket dan rencanain liburan jadi gampang
                </p>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Banjir promo dan benefit, liburan jadi hemat!
                </p>
                <p>
                  <img src={imgServChek} alt="" className={classes.check} />
                  Pesan tiket pesawat bisa dimana aja
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
