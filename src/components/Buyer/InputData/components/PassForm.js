import React, { useState } from "react";
import classes from "../css/PassForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTransaction } from "../../../../store/actions/transaction";

const PassForm = () => {
  const { state } = useLocation();
  console.log(state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nik, setNik] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleNik = (event) => {
    setNik(event.target.value);
  };
  const handleBirthDate = (event) => {
    setBirthDate(event.target.value);
  };

  const addPassenger = async (event) => {
    event.preventDefault();
    const dataPass = {
      ticketGo: state.ticketGo,
      ticketBack: state.ticketBack,
      tripId: state.typeTicket,
      firstName,
      lastName,
      NIK: nik,
      brithDate: birthDate,
    };
    const res = await dispatch(createTransaction(dataPass))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res.response.data.data.id);
    // history("/payment/transaction")
    history("/payment/confirmation", {
      state: {
        transId: res.response.data.data.id,
      },
    });
  };

  return (
    <>
      <div className="container mt-5">
        <div class="alert alert-warning margin " role="alert">
          <h1 class="alert-heading">Perhatian !</h1>
          <h5>
            Pastikan anda menginputkan data diri dengan benar, periksa sekali
            lagi untuk memastikan data yang anda inputkan sudah benar, karena
            data inputan penumpang nantinya tidak dapat di ubah.
          </h5>
          <hr />
          <p class="mb-0">
            Sebelum checkout anda harus mengisi data diri terlebih dahulu.
          </p>
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-8">
              <div className={classes.card}>
                <h2>Input Data Penumpang</h2>
                <div className={classes.content}>
                  <form onSubmit={addPassenger} className="row g-3 mt-2">
                    <h5>Penumpang 1</h5>
                    <div className="col-md-6">
                      <label htmlFor="inputEmail4" className="form-label">
                        First Name
                      </label>
                      <input
                        value={firstName}
                        onChange={handleFirstName}
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Fiqri"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputPassword4" className="form-label">
                        Last Name
                      </label>
                      <input
                        value={lastName}
                        onChange={handleLastName}
                        type="text"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Nugroho"
                        required
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="inputAddress" className="form-label">
                        Nomor Kependudukan
                      </label>
                      <input
                        value={nik}
                        onChange={handleNik}
                        type="number"
                        className="form-control"
                        id="inputAddress"
                        placeholder="NIK/SIM"
                        required
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="inputAddress2" className="form-label">
                        Tanggal Lahir
                      </label>
                      <input
                        value={birthDate}
                        onChange={handleBirthDate}
                        type="date"
                        className="form-control"
                        id="inputAddress2"
                        required
                      />
                    </div>
                    <div className="col-2 mt-4">
                      <button
                        className="btn rent2"
                        type="submit"
                        // onClick={addPassenger}
                      >
                        Checkout
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={classes.card2}>
                <h2>Detail Ticket</h2>
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
                        {/* <button
                          className="btn rent"
                          type="submit"
                          // onClick={addPassenger}
                        >
                          Checkout
                        </button> */}
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
