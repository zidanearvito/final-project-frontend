import React from "react";

import Button from "./Button";
import classes from "./DetailModal.module.css";

const DetailModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <div className={`${classes.modal} ${classes.card}`}>
        <header className={classes.header}>
          <h2>Detail Ticket</h2>
        </header>
        <div className={classes.modalBody}>
            <div className={classes.content}>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Code</h5></div>
                <div class="col-4">{props.code}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Tgl Berangkat</h5></div>
                <div class="col-4">{props.depDate}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Wkt Berangkat</h5></div>
                <div class="col-4">{props.depTime}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Tgl Tiba</h5></div>
                <div class="col-4">{props.arrDate}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Wkt Tiba</h5></div>
                <div class="col-4">{props.arrTime}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Dari</h5></div>
                <div class="col-4">{props.from}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Tujuan</h5></div>
                <div class="col-4">{props.to}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Pesawat</h5></div>
                <div class="col-4">{props.plane}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Harga</h5></div>
                <div class="col-4">{props.price}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Kapasitas</h5></div>
                <div class="col-4">{props.cap}</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4"><h5>Kelas</h5></div>
                <div class="col-4">{props.kelas}</div>
              </div>
        </div>

        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default DetailModal;
