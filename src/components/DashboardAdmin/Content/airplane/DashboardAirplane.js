import React, { useState, useEffect } from "react";
import Dashboard from "../../Index";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/trash.svg";
import inputIcon from "../img/input.svg";
import warning from "../img/warning.png";
import { useDispatch, useSelector } from "react-redux";
import {
  createAirplane,
  getAirplane,
  getAirplaneById,
  updateAirplane,
  deleteAirplane,
} from "../../../../store/actions/airplane";
import LoadPage from "../../../UI/LoadPage";
import { getCompany } from "../../../../store/actions/company";

const DashboardAirplane = () => {
  const dispatch = useDispatch();
  const { data, dataById, loading } = useSelector(
    (state) => state.airplaneReducer
  );
  const dataComp = useSelector((state) => state.companyReducer.data);
  // console.log(data);
  // console.log(dataComp);
  const [airplaneName, setAirplaneName] = useState("");
  const [airplaneCode, setAirplaneCode] = useState("");
  const [companyId, setCompanyId] = useState("");

  useEffect(() => {
    dispatch(getAirplane());
    dispatch(getCompany());
    setAirplaneName(dataById.airplaneName);
    setAirplaneCode(dataById.airplaneCode);
    setCompanyId(dataById.companyId);
  }, [dispatch, dataById]);
  // useEffect(() => {
  // }, [dispatch]);

  const handleAirplaneName = (event) => {
    setAirplaneName(event.target.value);
  };
  const handleAirplaneCode = (event) => {
    setAirplaneCode(event.target.value);
  };
  const handleCompanyId = (event) => {
    setCompanyId(event.target.value);
  };

  const createAirplaneForm = async (event) => {
    event.preventDefault();
    const data = {
      airplaneName,
      airplaneCode,
      companyId,
    };
    const res = await dispatch(createAirplane(data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    window.location.reload();
  };

  const getById = async (id) => {
    const res = await dispatch(getAirplaneById(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
  };

  const updateAirplaneForm = async (event) => {
    event.preventDefault();

    const id = dataById.id;
    const data = {
      airplaneName,
      airplaneCode,
      companyId,
    };
    const res = await dispatch(updateAirplane(id, data))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res.error);
    window.location.reload();
  };

  const deleteById = async (id) => {
    const res = await dispatch(deleteAirplane(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    window.location.reload();
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
              <h3>Airplanes</h3>
            </div>
            <button
              type="button"
              className="btn btn-blue btn-sm me-2 mb-3"
              data-bs-toggle="modal"
              data-bs-target="#addAirplane"
            >
              <img src={inputIcon} alt="icon" />
              Add airplane
            </button>
            <div className="table-responsive">
              <table className="table table-striped table-sm text-center bg-white">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Pesawat</th>
                    <th scope="col">Kode Pesawat</th>
                    <th scope="col">Perusahaan</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data?.map((airplane, no) => (
                    <tr key={airplane.id}>
                      <td>{no + 1}</td>
                      <td>{airplane.airplaneName}</td>
                      <td>{airplane.airplaneCode}</td>
                      <td>{airplane.company.companyName}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => getById(airplane.id)}
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#editAirplane"
                        >
                          <img src={editIcon} alt="icon" />
                        </button>
                        <button
                          type="button"
                          onClick={() => getById(airplane.id)}
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteAirplane"
                        >
                          <img src={deleteIcon} alt="icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ADD AIRPLANE */}

            <div
              className="modal fade"
              id="addAirplane"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={createAirplaneForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Airplane
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
                          Pesawat
                        </label>
                        <input
                          value={airplaneName}
                          onChange={handleAirplaneName}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kode Pesawat
                        </label>
                        <input
                          value={airplaneCode}
                          onChange={handleAirplaneCode}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Perusahaan
                        </label>
                        <select
                          defaultValue={companyId}
                          onChange={handleCompanyId}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Company</option>
                          {dataComp.data?.map((comp) => (
                            <option value={comp.id} key={comp.id}>
                              {comp.companyName}
                            </option>
                          ))}
                        </select>
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
                      {!airplaneName || !airplaneCode || !companyId ? (
                        <button type="submit" className="btn btn-blue" disabled>
                          Save changes
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-blue">
                          Save changes
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* EDIT AIRPLANE */}

            <div
              className="modal fade"
              id="editAirplane"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={updateAirplaneForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Airplane
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
                          Pesawat
                        </label>
                        <input
                          value={airplaneName}
                          onChange={handleAirplaneName}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Kode Pesawat
                        </label>
                        <input
                          value={airplaneCode}
                          onChange={handleAirplaneCode}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Perusahaan
                        </label>
                        <select
                          defaultValue={companyId}
                          onChange={handleCompanyId}
                          className="form-select form-select-md mb-3"
                          aria-label=".form-select-lg example"
                          required
                        >
                          <option>Company</option>
                          {dataComp.data?.map((comp) => (
                            <option value={comp.id} key={comp.id}>
                              {comp.companyName}
                            </option>
                          ))}
                        </select>
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
              id="deleteAirplane"
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
export default DashboardAirplane;
