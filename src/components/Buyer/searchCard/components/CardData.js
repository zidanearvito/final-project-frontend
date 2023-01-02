import React, { useState } from "react";
import classes from "../css/CardData.module.css";
import arrow from "../img/arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../../UI/Modal";
import save from "../img/save.png";
import { createWishlist } from "../../../../store/actions/wishlist";

const CardData = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ticketReducer);
  const [ticketGo, setTicketGo] = useState("");
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState("Success");
  const [responseTitle, setResponseTitle] = useState("Success");

  const ticketHandler = (id) => {
    if (!ticketGo && data.ticketBack) {
      setError({
        title: "Ticket Belum Dipilih",
        message: "Pilih Ticket Pergi Anda sebelum memilih Ticket pulang",
      });
    } else if (ticketGo) {
      history("/inputData", {
        state: { ticketGo, ticketBack: id, typeTicket: "2" },
      });
    } else {
      history("/inputData", {
        state: { ticketGo: id, typeTicket: "1" },
      });
    }
  };

  const wishHandler = async (id) => {
    // event.preventDefault();
    const data = {
      ticketId: id,
    };
    const res = await dispatch(createWishlist(data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    if (res.response) {
      setResponse(true);
      setResponseTitle({ message: "Wishlist" });
      setResponseMessage(res.response.data.message);
    }
  };

  const errorHandler = () => {
    setError(null);
  };
  const modalHandler = () => {
    setResponse(false);
  };

  return (
    <>
      {response && (
        <Modal
          title={responseTitle.message}
          message={responseMessage}
          onConfirm={modalHandler}
        />
      )}
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {data.ticketGo && (
        <div className={classes.ticketTitle}>
          <div className="alert alert-secondary text-center" role="alert">
            Ticket Pergi
          </div>
          {data.ticketGo?.map((ticket) => (
            <div className={classes.card} key={ticket.id}>
              <div className={classes.title}>
                <p>{ticket.airplane.company.companyName}</p>
                <p>{ticket.class}</p>
                <button
                  className="btn btn-wish ms-auto"
                  onClick={() => wishHandler(ticket.id)}
                >
                  <img src={save} alt="" />
                </button>
              </div>
              <div className={classes.content}>
                <div className="row mx-2 mt-4">
                  <div className="col-1">
                    <div className={classes.logo}>
                      <img
                        src={ticket.airplane.company.companyImage}
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="mb-1">{ticket.origin.airportName}</p>
                    <h5 className="mb-1">{ticket.departureTime}</h5>
                    <p>{ticket.origin.cityCode}</p>
                  </div>
                  <div className="col-2">
                    <div className={classes.arrow}>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="mb-1">{ticket.destination.airportName}</p>
                    <h5 className="mb-1">{ticket.arrivalTime}</h5>
                    <p>{ticket.destination.cityCode}</p>
                  </div>
                  <div className="col-3">
                    <h5 className="mb-1">
                      Rp. {new Intl.NumberFormat().format(ticket.price)}{" "}
                      <span className="badge bg-secondary">/org</span>
                    </h5>
                    {data.ticketBack ? (
                      <button
                        className="btn rent"
                        onClick={() => setTicketGo(ticket.id)}
                      >
                        Pilih Ticket
                      </button>
                    ) : (
                      <button
                        className="btn rent"
                        onClick={() => ticketHandler(ticket.id)}
                      >
                        Pilih Ticket
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.ticketBack && (
        <div className={classes.ticketTitle}>
          <div className="alert alert-secondary text-center" role="alert">
            Ticket Pulang
          </div>
          {data.ticketBack?.map((ticket) => (
            <div className={classes.card} key={ticket.id}>
              <div className={classes.title}>
                <p>{ticket.airplane.company.companyName}</p>
                <p>{ticket.class}</p>
                <button
                  className="btn btn-wish ms-auto"
                  onClick={() => wishHandler(ticket.id)}
                >
                  <img src={save} alt="" />
                </button>
              </div>
              <div className={classes.content}>
                <div className="row mx-2 mt-4">
                  <div className="col-1">
                    <div className={classes.logo}>
                      <img
                        src={ticket.airplane.company.companyImage}
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="mb-1">{ticket.origin.airportName}</p>
                    <h5 className="mb-1">{ticket.departureTime}</h5>
                    <p>{ticket.origin.cityCode}</p>
                  </div>
                  <div className="col-2">
                    <div className={classes.arrow}>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <div className="col-3">
                    <p className="mb-1">{ticket.destination.airportName}</p>
                    <h5 className="mb-1">{ticket.arrivalTime}</h5>
                    <p>{ticket.destination.cityCode}</p>
                  </div>
                  <div className="col-3">
                    <h5 className="mb-1">
                      Rp. {new Intl.NumberFormat().format(ticket.price)}{" "}
                      <span className="badge bg-secondary">/org</span>
                    </h5>
                    <button
                      className="btn rent"
                      onClick={() => ticketHandler(ticket.id)}
                    >
                      Pilih Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CardData;
