import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../css/Search.module.css";
import Modal from "../../../UI/Modal";
import { searchTicket } from "../../../../store/actions/ticket";
import { getAirport } from "../../../../store/actions/airport";

const Search = () => {
  const dispatch = useDispatch();
  const dataAirport = useSelector((state) => state.airportReducer.data);
  const [typeTrip, setTypeTrip] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error");

  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const handleTypeTrip = (event) => {
    setTypeTrip(event.target.value);
    setReturnDate("");
  };
  const handleOrigin = (event) => {
    setOriginCity(event.target.value);
  };
  const handleDestination = (event) => {
    setDestinationCity(event.target.value);
  };
  const handleDepartureDate = (event) => {
    setDepartureDate(event.target.value);
  };
  const handleReturnDate = (event) => {
    setReturnDate(event.target.value);
  };

  const modalHandler = () => {
    setError(false);
  };

  const searchForm = async (event) => {
    event.preventDefault();
    const data = {
      originCity,
      destinationCity,
      departureDate,
      returnDate,
    };
    const res = await dispatch(searchTicket(data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    if (res.error) {
      setDepartureDate("");
      setReturnDate("");
      setError(true);
      setErrorMessage(res.error.response.data.message);
    }
  };
  return (
    <>
      {error && (
        <Modal
          title={errorMessage}
          message={errorMessage}
          onConfirm={modalHandler}
        />
      )}

      <div id="search" className={classes.card}>
        <form className="row gx-3 gy-2 mx-3 align-items-center">
          <div className="col-6 dm">
            <label htmlFor="specificSizeSelect">Dari</label>
            <select
              onChange={handleOrigin}
              className="form-select"
              id="specificSizeSelect"
              value={originCity}
              required>
              <option>Pilih Kota</option>
              {dataAirport.data?.map((airport) => (
                <option value={airport.city} key={airport.id}>
                  {airport.city}
                </option>
              ))}
            </select>
          </div>

          <div className="col-6 dm">
            <label htmlFor="specificSizeSelect">Tujuan</label>
            <select
              onChange={handleDestination}
              className="form-select"
              id="specificSizeSelect"
              value={destinationCity}
              required>
              <option>Pilih Kota</option>
              {dataAirport.data?.map((airport) => (
                <option value={airport.city} key={airport.id}>
                  {airport.city}
                </option>
              ))}
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeSelect">Tipe Penerbangan</label>
            <select
              onChange={handleTypeTrip}
              className="form-select"
              id="specificSizeSelect"
              value={typeTrip}>
              <option value="1">One-Way</option>
              <option value="2">Round-Trip</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeSelect">Tanggal Pergi</label>
            <input
              onChange={handleDepartureDate}
              type="date"
              className="form-control"
              id="inputTanggal"
              value={departureDate}
              required
            />
          </div>

          {typeTrip === "2" && (
            <div className="col-4">
              <label htmlFor="specificSizeSelect">Tanggal Pulang</label>
              <input
                onChange={handleReturnDate}
                type="date"
                className="form-control"
                id="inputTanggal"
                value={returnDate}
                required
              />
            </div>
          )}
          <div className="col-2">
            <div>
              <button
                className="btn btn-blue mt-3"
                type="submit"
                onClick={searchForm}>
                Cari Ticket
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
