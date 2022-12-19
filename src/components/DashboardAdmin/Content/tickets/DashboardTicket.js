import React, { useState, useEffect } from "react";
import Dashboard from "../../Index";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/trash.svg";
import detailIcon from "../img/eye.svg";
import inputIcon from "../img/input.svg";
import warning from "../img/warning.png";
import { useDispatch, useSelector } from "react-redux";
import {
  createTicket,
  getTicket,
  getTicketById,
  updateTicket,
  deleteTicket,
} from "../../../../store/actions/ticket";
import LoadPage from "../../../UI/LoadPage";
import { getAirplane } from "../../../../store/actions/airplane";
import { getAirport } from "../../../../store/actions/airport";
import DetailModal from "../../../UI/DetailModal";

const DashboardTicket = () => {
  const dispatch = useDispatch();
  const { data, dataById, loading } = useSelector(
    (state) => state.ticketReducer
  );
  const dataAirport = useSelector((state) => state.airportReducer.data);
  const dataAirplane = useSelector((state) => state.airplaneReducer.data);
  // console.log(dataAirport)
  // console.log(dataAirplane)

  const [code, setCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo, setFlightTo] = useState("");
  const [airplaneId, setAirplaneId] = useState("");
  const [price, setPrice] = useState("");
  const [capacity, setCapacity] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [kelas, setKelas] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMes, setModalMes] = useState("");

  useEffect(() => {
    dispatch(getTicket());
    dispatch(getAirplane());
    dispatch(getAirport());
    setCode(dataById.code);
    setDepartureDate(dataById.departureDate)
    setDepartureTime(dataById.departureTime);
    setArrivalDate(dataById.arrivalDate);
    setArrivalTime(dataById.arrivalTime);
    setFlightFrom(dataById.flightFrom)
    setFlightTo(dataById.flightTo)
    setAirplaneId(dataById.airplaneId)
    setPrice(dataById.price);
    setCapacity(dataById.capacity);
    setSeatNumber(dataById.seatNumber);
    setKelas(dataById.class);
  }, [dispatch, dataById]);

  const handleCode = (event) => {
    setCode(event.target.value);
  };
  const handleDdate = (event) => {
    setDepartureDate(event.target.value);
  };
  const handleDtime = (event) => {
    setDepartureTime(event.target.value);
  };
  const handleArrdate = (event) => {
    setArrivalDate(event.target.value);
  };
  const handleArrtime = (event) => {
    setArrivalTime(event.target.value);
  };
  const handleFlightFrom = (event) => {
    setFlightFrom(event.target.value);
  };
  const handleFlightTo = (event) => {
    setFlightTo(event.target.value);
  };
  const handleAirplaneId = (event) => {
    setAirplaneId(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleCapacity = (event) => {
    setCapacity(event.target.value);
  };
  const handleSeatNumber = (event) => {
    setSeatNumber(event.target.value);
  };
  const handleClass = (event) => {
    setKelas(event.target.value);
  };

  const createTicketForm = async (event) => {
    event.preventDefault();
    const data = {
      code,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      flightFrom,
      flightTo,
      airplaneId,
      price,
      capacity,
      seatNumber,
      class: kelas,
    };
    console.log(data);
    const res = await dispatch(createTicket(data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    window.location.reload();
  };
  const updateTicketForm = async (event) => {
    event.preventDefault();

    const id = dataById.id;
    const data = {
      code,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      flightFrom,
      flightTo,
      airplaneId,
      price,
      capacity,
      seatNumber,
      class: kelas,
    };
    const res = await dispatch(updateTicket(id, data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res.error);
    window.location.reload();
  };

  const getById = async (id) => {
    const res = await dispatch(getTicketById(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
  };

  const deleteById = async (id) => {
    const res = await dispatch(deleteTicket(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    window.location.reload();
  };

  const modalId = async (id) => {
    const res = await dispatch(getTicketById(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    const resData = res.response.data.data;
    if (res.response) {
      setShowModal(true);
      setModalMes({
        code: resData.code,
        depDate: resData.departureDate,
        depTime: resData.departureTime,
        arrDate: resData.arrivalDate,
        arrTime: resData.arrivalTime,
        from: resData.origin.airportName,
        to: resData.destination.airportName,
        plane: resData.airplane.airplaneName,
        price: resData.price,
        cap: resData.capacity,
        num: resData.seatNumber,
        kelas: resData.class,
      });
    }
  };

  const handleModalOf = () => {
    setShowModal(false);
  };

  return (
    <>
      {loading ? (
        <LoadPage />
      ) : (
        <>
          <Dashboard />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5 pt-3">
            <div className="mt-3 mb-3 border-bottom">
              <h3>Tickets</h3>
            </div>
            <button
              type="button"
              className="btn btn-blue btn-sm me-2 mb-3"
              data-bs-toggle="modal"
              data-bs-target="#addTicket"
            >
              <img src={inputIcon} alt="icon" />
              Add ticket
            </button>
            <div className="table-responsive">
              <table className="table table-striped table-sm text-center bg-white">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Code</th>
                    <th scope="col">Dari</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Pesawat</th>
                    <th scope="col">Harga</th>
                    <th scope="col">No Kursi</th>
                    <th scope="col">Kelas</th>
                    <th scope="col">Option</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data?.map((ticket, no) => (
                    <tr key={ticket.id}>
                      <td>{no + 1}</td>
                      <td>{ticket.code}</td>
                      <td>{ticket.origin.airportName}</td>
                      <td>{ticket.destination.airportName}</td>
                      <td>{ticket.airplane.airplaneName}</td>
                      <td>{"Rp. " + ticket.price}</td>
                      <td>{ticket.seatNumber}</td>
                      <td>{ticket.class}</td>
                      <td>
                        <button
                          onClick={() => getById(ticket.id)}
                          type="button"
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#editTicket"
                        >
                          <img src={editIcon} alt="icon" />
                        </button>
                        <button
                        onClick={() => getById(ticket.id)}
                          type="button"
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteTicket"
                        >
                          <img src={deleteIcon} alt="icon" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-blue"
                          onClick={() => modalId(ticket.id)}
                        >
                          <img src={detailIcon} alt="Icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {showModal && modalMes && (
              <DetailModal
                onConfirm={handleModalOf}
                code={modalMes.code}
                depDate={modalMes.depDate}
                depTime={modalMes.depTime}
                arrDate={modalMes.arrDate}
                arrTime={modalMes.arrTime}
                from={modalMes.from}
                to={modalMes.to}
                plane={modalMes.plane}
                price={modalMes.price}
                cap={modalMes.cap}
                num={modalMes.num}
                kelas={modalMes.kelas}
              />
            )}

            {/* ADD AIRPLANE */}

            <div
              className="modal fade"
              id="addTicket"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <form onSubmit={createTicketForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Ticket
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Code
                        </label>
                        <input
                          value={code}
                          onChange={handleCode}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="T3002288"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Tgl Berangkat
                        </label>
                        <input
                          value={departureDate}
                          onChange={handleDdate}
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Wkt Berangkat
                        </label>
                        <input
                          value={departureTime}
                          onChange={handleDtime}
                          type="time"
                          className="form-control"
                          id="exampleFormControlInput1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Tgl Tiba
                        </label>
                        <input
                          value={arrivalDate}
                          onChange={handleArrdate}
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Wkt Tiba
                        </label>
                        <input
                          value={arrivalTime}
                          onChange={handleArrtime}
                          type="time"
                          className="form-control"
                          id="exampleFormControlInput1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Dari
                        </label>
                        <select
                          defaultValue={flightFrom}
                          onChange={handleFlightFrom}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Bandara</option>
                          {dataAirport.data?.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                              {airport.airportName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Tujuan
                        </label>
                        <select
                          defaultValue={flightTo}
                          onChange={handleFlightTo}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Bandara</option>
                          {dataAirport.data?.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                              {airport.airportName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Pesawat
                        </label>
                        <select
                          defaultValue={airplaneId}
                          onChange={handleAirplaneId}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Pesawat</option>
                          {dataAirplane.data?.map((airplane) => (
                            <option value={airplane.id} key={airplane.id}>
                              {airplane.airplaneName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Harga
                        </label>
                        <input
                          value={price}
                          onChange={handlePrice}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="1200000"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kapasitas
                        </label>
                        <input
                          value={capacity}
                          onChange={handleCapacity}
                          type="number"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="20"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          No. Kursi
                        </label>
                        <input
                          value={seatNumber}
                          onChange={handleSeatNumber}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="13"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kelas
                        </label>
                        <input
                          value={kelas}
                          onChange={handleClass}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
                          required
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-blue">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* EDIT AIRPLANE */}

            <div
              className="modal fade"
              id="editTicket"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={updateTicketForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Ticket
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Code
                        </label>
                        <input
                          value={code}
                          onChange={handleCode}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="T3002288"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Tgl Berangkat
                        </label>
                        <input
                          value={departureDate}
                          onChange={handleDdate}
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Wkt Berangkat
                        </label>
                        <input
                          value={departureTime}
                          onChange={handleDtime}
                          type="time"
                          className="form-control"
                          id="exampleFormControlInput1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Tgl Tiba
                        </label>
                        <input
                          value={arrivalDate}
                          onChange={handleArrdate}
                          type="date"
                          className="form-control"
                          id="exampleFormControlInput1"
                          />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Wkt Tiba
                        </label>
                        <input
                          value={arrivalTime}
                          onChange={handleArrtime}
                          type="time"
                          className="form-control"
                          id="exampleFormControlInput1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Dari
                        </label>
                        <select
                          defaultValue={flightFrom}
                          onChange={handleFlightFrom}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Bandara</option>
                          {dataAirport.data?.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                              {airport.airportName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Tujuan
                        </label>
                        <select
                          defaultValue={flightTo}
                          onChange={handleFlightTo}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Bandara</option>
                          {dataAirport.data?.map((airport) => (
                            <option value={airport.id} key={airport.id}>
                              {airport.airportName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Pesawat
                        </label>
                        <select
                          defaultValue={airplaneId}
                          onChange={handleAirplaneId}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Pesawat</option>
                          {dataAirplane.data?.map((airplane) => (
                            <option value={airplane.id} key={airplane.id}>
                              {airplane.airplaneName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Harga
                        </label>
                        <input
                          value={price}
                          onChange={handlePrice}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="1200000"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kapasitas
                        </label>
                        <input
                          value={capacity}
                          onChange={handleCapacity}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="20"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          No. Kursi
                        </label>
                        <input
                          value={seatNumber}
                          onChange={handleSeatNumber}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="13"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kelas
                        </label>
                        <input
                          value={kelas}
                          onChange={handleClass}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
                          required
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-blue">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* DELETE AIRPLANE */}

            <div
              className="modal fade"
              id="deleteTicket"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                  <form>
                    <div className="modal-body text-center">
                      <img
                        src={warning}
                        alt="icon"
                        className="img-warning img-fluid"
                      />
                      <h3>Yakin hapus data ?</h3>
                      <button type="button" className="btn btn-blue me-3 mt-2" onClick={() => deleteById(dataById.id)}>
                        Yes
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mt-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default DashboardTicket;
