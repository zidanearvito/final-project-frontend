import React, { useState, useEffect } from "react";
import Dashboard from "../../Index";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/trash.svg";
import inputIcon from "../img/input.svg";
import warning from "../img/warning.png";
import { useDispatch, useSelector } from "react-redux";
import {
  createAirport,
  getAirport,
  getAirportById,
  updateAirport,
  deleteAirport,
} from "../../../../store/actions/airport";
import Button from "../../../UI/Button";
import LoadPage from "../../../UI/LoadPage";

const DashboardAirport = () => {
  const dispatch = useDispatch();
  const { data, dataById } = useSelector((state) => state.airportReducer);
  const [airportName, setAirportName] = useState("");
  const [city, setCity] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAirport());
    setAirportName(dataById.airportName);
    setCity(dataById.city);
    setCityCode(dataById.cityCode);
  }, [dataById, dispatch]);

  const handleAirportName = (event) => {
    setAirportName(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleCityCode = (event) => {
    setCityCode(event.target.value);
  };

  const modalHandler = () => {
    window.location.reload();
  };

  const createAirportForm = async (event) => {
    event.preventDefault();

    const data = {
      airportName,
      city,
      cityCode,
    };
    const res = await dispatch(createAirport(data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res.error);
  };

  const getById = async (id) => {
    const res = await dispatch(getAirportById(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
  };

  const updateAirportForm = async (event) => {
    event.preventDefault();

    const id = dataById.id;
    const data = {
      airportName,
      city,
      cityCode,
    };
    const res = await dispatch(updateAirport(id, data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res.error);
  };

  const deleteById = async (id) => {
    const res = await dispatch(deleteAirport(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
  };

  setInterval(function () {
    setLoading(false);
  }, 700);

  return (
    <>
      {loading ? (
        <LoadPage />
      ) : (
        <>
          <Dashboard />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5 pt-3">
            <div className="mt-3 mb-3 border-bottom">
              <h3>Airports</h3>
            </div>
            <button
              type="button"
              className="btn btn-blue btn-sm me-2 mb-3"
              data-bs-toggle="modal"
              data-bs-target="#addAirport"
            >
              <img src={inputIcon} alt="icon" />
              Add airport
            </button>
            <div className="table-responsive">
              <table className="table table-striped table-sm text-center bg-white">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Bandara</th>
                    <th scope="col">Kota</th>
                    <th scope="col">Kode Kota</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((airport, no) => (
                    <tr key={airport.id}>
                      <td>{no + 1}</td>
                      <td>{airport.airportName}</td>
                      <td>{airport.city}</td>
                      <td>{airport.cityCode}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => getById(airport.id)}
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#editAirport"
                        >
                          <img src={editIcon} alt="icon" />
                        </button>
                        <button
                        onClick={() => getById(airport.id)}
                          type="button"
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteAirport"
                        >
                          <img src={deleteIcon} alt="icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ADD AIRPORT */}

            <div
              className="modal fade"
              id="addAirport"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={createAirportForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Airport
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
                          Bandara
                        </label>
                        <input
                          value={airportName}
                          onChange={handleAirportName}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Bandara"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kota
                        </label>
                        <input
                          value={city}
                          onChange={handleCity}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Kota"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kode Kota
                        </label>
                        <input
                          value={cityCode}
                          onChange={handleCityCode}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Kode Kota"
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
                      <Button type="submit" onClick={modalHandler}>
                        Save changes
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* EDIT AIRPORT */}

            <div
              className="modal fade"
              id="editAirport"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={updateAirportForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Airport
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
                          Bandara
                        </label>
                        <input
                          value={airportName}
                          onChange={handleAirportName}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Bandara"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kota
                        </label>
                        <input
                          value={city}
                          onChange={handleCity}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Kota"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kode Kota
                        </label>
                        <input
                          value={cityCode}
                          onChange={handleCityCode}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Kode Kota"
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
                      <Button type="submit" onClick={modalHandler}>
                        Save changes
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* DELETE AIRPORT */}

            <div
              className="modal fade"
              id="deleteAirport"
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
                      <button
                        type="button"
                        className="btn btn-blue me-3 mt-2"
                        data-bs-dismiss="modal"
                        onClick={() => deleteById(dataById.id)}
                      >
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
export default DashboardAirport;
