import React from "react";
import classes from "../css/PaymentConfirm.module.css";
import arrow from "../img/arrow.png";

const PaymentConfirm = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 mt-3">
            {/* <div className={classes.cardUser}>
              <div className="p-2">
                <h2>Pilih Pembayaran</h2>
              </div>
              <div className={classes.contentUser}>
                <select
                  //   onChange={driverHandler}
                  className="form-select mt-4"
                  id="specificSizeSelect"
                  //   value={driver}
                >
                  <option className="disabled">Pilih Pembayaran</option>
                  <option value="1">Bank Rakyat Indonesia (BRI)</option>
                  <option value="2">Bank Mandiri</option>
                  <option value="3">Bank Central Asia (BCA)</option>
                  <option value="4">Bank Negara Indonesia (BNI)</option>
                  <option value="5">GOPAY</option>
                  <option value="6">DANA</option>
                  <option value="7">OVO</option>
                </select>
              </div>
            </div> */}

            {/* data penumpang */}

            <div className={classes.cardUser}>
              <div className="p-2">
                <h2>Data Penumpang</h2>
              </div>
              <div className={classes.contentUser}>
                <div className={classes.dataUser}>
                  <h5 className="me-2 mt-3">Nama Depan : </h5>
                  <p className="mt-3">Atha</p>
                </div>
                <div className={classes.dataUser}>
                  <h5 className="me-2">Nama Belakang : </h5>
                  <p>Ardisa</p>
                </div>
                <div className={classes.dataUser}>
                  <h5 className="me-2">No. Kep : </h5>
                  <p>3377823422810003</p>
                </div>
                <div className={classes.dataUser}>
                  <h5 className="me-2">Tgl-Lahir : </h5>
                  <p>2022-12-02</p>
                </div>
                <select
                  //   onChange={driverHandler}
                  className="form-select mt-2"
                  id="specificSizeSelect"
                  //   value={driver}
                >
                  <option className="disabled">Pilih Pembayaran</option>
                  <option value="1">Bank Rakyat Indonesia (BRI)</option>
                  <option value="2">Bank Mandiri</option>
                  <option value="3">Bank Central Asia (BCA)</option>
                  <option value="4">Bank Negara Indonesia (BNI)</option>
                  <option value="5">GOPAY</option>
                  <option value="6">DANA</option>
                  <option value="7">OVO</option>
                </select>
              </div>
            </div>
            <div class="alert alert-info">
              <p>
                Silahkan Melakukan Pembayaran Rp. 3.000.000 ke <br />
                <strong>
                  BANK BNI 324525142882575 AN. Lets Flight Indonesia
                </strong>
              </p>
            </div>
          </div>

          {/* ticket */}

          <div className="col-9 mt-3">
            <div className={classes.cardUser}>
              <div className="p-2">
                <h2>Ticket</h2>
              </div>
              <div className={classes.contentTicket}>
                <div className="row mx-2 mt-4">
                  <>
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
                      <div className={classes.arrowTicket}>
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
                        Rp. 3.000.000{" "}
                        <span className="badge bg-secondary">/org</span>
                      </h5>
                    </div>

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
                      <div className={classes.arrowTicket}>
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
                        Rp. 3.000.000{" "}
                        <span className="badge bg-secondary">/org</span>
                      </h5>
                    </div>  
                  </>

                  <div className={classes.contentTicket}>
                    <div className="d-flex mt-3">
                      <h6 className="me-3">Total Harga : </h6>
                      <h5>Rp. 3.000.000</h5>
                      <button className="ms-auto btn rent">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentConfirm;
