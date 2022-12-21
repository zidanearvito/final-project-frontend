import React from "react";
import classes from "../css/PassForm.module.css";

const PassForm = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className={classes.card}>
                <h2>Input Data Penumpang</h2>
                <div className={classes.content}>
                  <form class="row g-3 mt-2">
                    <h5>Penumpang 1</h5>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        First Name
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Fiqri"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="Nugroho"
                        required
                      />
                    </div>
                    <div class="col-8">
                      <label for="inputAddress" class="form-label">
                        Nomor Kependudukan
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputAddress"
                        placeholder="NIK/SIM"
                        required
                      />
                    </div>
                    <div class="col-4">
                      <label for="inputAddress2" class="form-label">
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="inputAddress2"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className={classes.card}>
                <h2>Harga</h2>
                <div className={classes.content}>
                  <div className="mt-3">
                    <span>Total</span>
                    <h2>Rp. 6.000.000</h2>
                    <span className="text-muted small">
                      *Sebelum Lanjut anda harus mengisi data diri terlebih
                      dahulu
                    </span>
                    <div className="m-t-sm">
                      <div className="btn-group mt-3">
                          <button
                            className="btn rent"
                            type="submit"
                          >
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
      </div>
    </>
  );
};

export default PassForm;
