import React from "react";
import classes from "../css/CardData.module.css";
import arrow from "../img/arrow.png";

const CardData = () => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.title}>
          <p>Lion Air</p>
          <p>Ekonomi</p>
        </div>
        <div className={classes.content}>
          <div className="row mx-2 mt-4">
            <div className="col-1">
              <div className="logo">
                <img src="" alt="Logo" />
              </div>
            </div>
            <div className="col-3">
              <p className="mb-1">Bandara Ahmad Yani</p>
              <h5 className="mb-1">13:40</h5>
              <p>SMG</p>
            </div>
            <div className="col-2">
              <div className={classes.arrow}>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="col-3">
              <p className="mb-1">Soekarno Hatta</p>
              <h5 className="mb-1">22:40</h5>
              <p>JKT</p>
            </div>
            <div className="col-3">
              <h5 className="mb-1">
                Rp. 3.000.000 <span className="badge bg-secondary">/org</span>
              </h5>
              <a href="/#">
                <button className="btn rent">Pilih Ticket</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardData;
