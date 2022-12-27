import React, { useState } from "react";
import classes from "../css/CardData.module.css";
import arrow from "../img/arrow.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../../UI/Modal";

const CardData = () => {
  const history = useNavigate();
  const { data } = useSelector((state) => state.ticketReducer);
  console.log(data);
  const [ticketGo, setTicketGo] = useState("");
  const [error, setError] = useState(false);

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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
                      Rp. {ticket.price}{" "}
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
                      Rp. {ticket.price}{" "}
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
