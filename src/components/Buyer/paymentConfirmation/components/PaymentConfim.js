import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../css/PaymentConfirm.module.css";
import arrow from "../img/arrow.png";
import Modal from "../../../UI/Modal";
import { addPayment, getPayment } from "../../../../store/actions/payment";
import { getTransactionId } from "../../../../store/actions/transaction";
import { useLocation, useNavigate } from "react-router-dom";
import { hideLoader, showLoader } from "../../../../store/actions/loader";
import LoadData from "../../../UI/LoadData";

const PaymentConfirm = () => {
  const { state } = useLocation();
  console.log(state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { payment } = useSelector((state) => state.paymentReducer);
  const { dataById, loading } = useSelector(
    (state) => state.transactionReducer
  );
  console.log(loading);
  console.log(payment);
  useEffect(() => {
    dispatch(showLoader());
    dispatch(getPayment());
    dispatch(getTransactionId(state.transId));
    dispatch(hideLoader());
  }, [dispatch, state]);

  const [paymentId, setPaymentId] = useState();
  const [response, setResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState("Success");
  const [responseTitle, setResponseTitle] = useState("Success");

  const handlePayment = (event) => {
    setPaymentId(event.target.value);
  };
  const modalHandler = () => {
    history("/");
  };

  const createPayment = async (event) => {
    event.preventDefault();

    const pay = {
      transactionId: state.transId,
      paymentId,
    };
    const res = await dispatch(addPayment(pay))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    if (res.response) {
      setResponse(true);
      setResponseTitle(res.response.data.message);
      setResponseMessage({ message: "Pembayaran anda akan kami proses :)" });
    }
  };

  return (
    <>
      {response && (
        <Modal
          title={responseTitle}
          message={responseMessage.message}
          onConfirm={modalHandler}
        />
      )}
      {!loading && (
        <>
          <div className={classes.loading}>
            <LoadData />
          </div>
        </>
      )}
      {dataById?.map((get) => (
        <div className="container mt-5" key={get.id}>
          <div className="row">
            <div className="col-3 mt-3">
              <div className={classes.cardUser}>
                <div className="p-2">
                  <h2>Data Penumpang</h2>
                </div>
                <div className={classes.contentUser}>
                  <div className={classes.dataUser}>
                    <h5 className="me-2 mt-3">Nama Depan : </h5>
                    <p className="mt-3">{get.passenger.firstName}</p>
                  </div>
                  <div className={classes.dataUser}>
                    <h5 className="me-2">Nama Belakang : </h5>
                    <p>{get.passenger.lastName}</p>
                  </div>
                  <div className={classes.dataUser}>
                    <h5 className="me-2">No. Kep : </h5>
                    <p>{get.passenger.NIK}</p>
                  </div>
                  <div className={classes.dataUser}>
                    <h5 className="me-2">Tgl-Lahir : </h5>
                    <p>{get.passenger.birthDate}</p>
                  </div>
                  <select
                    onChange={handlePayment}
                    className="form-select mt-2"
                    id="specificSizeSelect"
                    value={paymentId}
                  >
                    <option>Pilih Pembayaran</option>
                    {payment.data?.map((payment) => (
                      <option value={payment.id} key={payment.id}>
                        {payment.bankName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="alert alert-info">
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
                        <div className={classes.logo}>
                          <img
                            src={get.go.airplane.company.companyImage}
                            alt="Logo"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <p className="mb-1">{get.go.origin.airportName}</p>
                        <h5 className="mb-1">{get.go.departureTime}</h5>
                        <p>{get.go.origin.cityCode}</p>
                      </div>
                      <div className="col-2">
                        <div className={classes.arrowTicket}>
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                      <div className="col-3">
                        <p className="mb-1">{get.go.destination.airportName}</p>
                        <h5 className="mb-1">{get.go.arrivalTime}</h5>
                        <p>{get.go.destination.cityCode}</p>
                      </div>
                      <div className="col-3">
                        <h5 className="mb-1">
                          Rp. {get.go.price}
                          <span className="badge bg-secondary">/org</span>
                        </h5>
                      </div>

                      {get.back && (
                        <>
                          <div className="col-1">
                            <div className={classes.logo}>
                              <img
                                src={get.back.airplane.company.companyImage}
                                alt="Logo"
                              />
                            </div>
                          </div>
                          <div className="col-3">
                            <p className="mb-1">
                              {get.back.origin.airportName}
                            </p>
                            <h5 className="mb-1">{get.back.departureTime}</h5>
                            <p>{get.back.origin.cityCode}</p>
                          </div>
                          <div className="col-2">
                            <div className={classes.arrowTicket}>
                              <img src={arrow} alt="" />
                            </div>
                          </div>
                          <div className="col-3">
                            <p className="mb-1">
                              {get.back.destination.airportName}
                            </p>
                            <h5 className="mb-1">{get.back.arrivalTime}</h5>
                            <p>{get.back.destination.cityCode}</p>
                          </div>
                          <div className="col-3">
                            <h5 className="mb-1">
                              Rp. {get.back.price}
                              <span className="badge bg-secondary">/org</span>
                            </h5>
                          </div>
                        </>
                      )}
                    </>

                    <div className={classes.contentTicket}>
                      <div className="d-flex mt-3">
                        <h6 className="me-3">Total Harga : </h6>
                        <h5>Rp. {get.totalPrice}</h5>
                        <button
                          className="ms-auto btn rent"
                          onClick={createPayment}
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
      ))}
    </>
  );
};

export default PaymentConfirm;
