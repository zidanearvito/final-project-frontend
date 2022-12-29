import React, { useEffect, useState } from "react";
import classes from "../css/TicketCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactionUser,
  cancelTransaction,
  filterTransaction,
  getTransactionId,
} from "../../../../store/actions/transaction";
import { hideLoader, showLoader } from "../../../../store/actions/loader";
import LoadData from "../../../UI/LoadData";
import { useNavigate } from "react-router-dom";
import ModalConfirm from "../../../UI/ModalConfirm";

const TicketCard = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data, loading } = useSelector((state) => state.transactionReducer);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState();
  console.log(data);
  useEffect(() => {
    dispatch(hideLoader());
    dispatch(getTransactionUser());
    dispatch(showLoader());
  }, [dispatch]);

  const transaction = (id) => {
    history("/payment/confirmation", {
      state: {
        transId: id,
      },
    });
  };

  const cancelTrans = async (id) => {
    await dispatch(cancelTransaction(id));
    setModal(false)
    dispatch(showLoader());
    dispatch(getTransactionUser());
  };

  const getTransId = async (id) => {
    await dispatch(getTransactionId(id));
    setModal(true);
    setId(id);
    // dispatch(getTransactionUser());
  };

  const filterSuccess = async (event) => {
    event.preventDefault();
    dispatch(showLoader());
    const data = {
      status: "success",
    };
    await dispatch(filterTransaction(data));
    dispatch(hideLoader());
  };

  const filterCancel = async (event) => {
    event.preventDefault();
    dispatch(showLoader());
    const data = {
      status: "canceled",
    };
    await dispatch(filterTransaction(data));
    dispatch(hideLoader());
  };

  const filterPending = async (event) => {
    event.preventDefault();
    dispatch(showLoader());
    const data = {
      status: "pending",
    };
    await dispatch(filterTransaction(data));
    dispatch(hideLoader());
  };

  const modalHandle = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <ModalConfirm onClick={() => cancelTrans(id)} onConfirm={modalHandle} />}
      <div className="container">
        <div className="row">
          <div className="col-3 mt-5">
            <ul className="list-group mt-5 pt-2 text-center">
              <li className="list-group-item blue">Filter</li>
              <button
                className="list-group-item btn btn-dark"
                onClick={filterSuccess}
              >
                Success
              </button>
              <button
                className="list-group-item btn btn-dark"
                onClick={filterCancel}
              >
                Cancelled
              </button>
              <button
                className="list-group-item btn btn-dark"
                onClick={filterPending}
              >
                Pending
              </button>
            </ul>
          </div>
          <div className="col-9">
            {loading && (
              <div className={classes.loading}>
                <LoadData />{" "}
              </div>
            )}
            <div className={classes.cardBody}>
              {data.data?.map((history) => (
                <div className={classes.card} key={history.id}>
                  <div className={classes.title}>
                    {history.status === "success" ? (
                      <div
                        className="alert alert-success text-center"
                        role="alert"
                      >
                        {history.status}
                      </div>
                    ) : history.status === "pending" ? (
                      <>
                        <div
                          className="alert alert-warning text-center"
                          role="alert"
                        >
                          {history.status}
                        <button
                          onClick={() => getTransId(history.id)}
                          className="btn btn-red mb-5 float-end"
                        >
                          X
                        </button>
                        </div>
                      </>
                    ) : (
                      <div
                        className="alert alert-danger text-center"
                        role="alert"
                      >
                        {history.status}
                      </div>
                    )}
                  </div>
                  <div className={classes.content}>
                    <div className="row mx-2 mt-4">
                      <div className="col-3">
                        {history.typeTrip.id === 2 ? (
                          <div
                            className="alert alert-primary text-center"
                            role="alert"
                          >
                            {history.typeTrip.type}
                          </div>
                        ) : (
                          <div
                            className="alert alert-warning text-center"
                            role="alert"
                          >
                            {history.typeTrip.type}
                          </div>
                        )}
                      </div>
                      <div className="col-3">
                        <p className="mb-1">
                          {history.passenger.firstName}{" "}
                          {history.passenger.lastName}
                        </p>
                        <h5 className="mb-1">{history.passenger.NIK}</h5>
                        <p>{history.passenger.brithDate}</p>
                      </div>
                      <div className="col-3">
                        <p className="mb-1">Transaction Code</p>
                        <h5 className="mb-1">{history.transactionCode}</h5>
                      </div>
                      <div className="col-3">
                        <h5 className="mb-1">Rp. {history.totalPrice}</h5>
                        {history.status === "pending" && (
                          <button
                            className="btn rent"
                            onClick={() => transaction(history.id)}
                          >
                            Bayar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
