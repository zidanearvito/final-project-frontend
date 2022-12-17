import React, { useState, useEffect } from "react";
import Dashboard from "../../Index";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/trash.svg";
import detailIcon from "../img/eye.svg";
import inputIcon from "../img/input.svg";
import warning from "../img/warning.png";
// import classes from "../css/Content.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createCompany,
  getCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../../../../store/actions/company";
import LoadPage from "../../../UI/LoadPage";

const DashboardCompany = () => {
  const dispatch = useDispatch();
  const { data, dataById, loading } = useSelector(
    (state) => state.companyReducer
  );
  console.log(data);
  const [companyName, setCompanyName] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    dispatch(getCompany());
    setCompanyName(dataById.companyName);
  }, [dispatch, dataById]);

  const handleCompanyName = (event) => {
    setCompanyName(event.target.value);
  };

  const createCompanyForm = async (event) => {
    event.preventDefault();

    const data = {
      companyName,
      image,
    };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const res = await dispatch(createCompany(formData))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
    window.location.reload();
  };

  const getById = async (id) => {
    const res = await dispatch(getCompanyById(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res);
  };

  const updateCompanyForm = async (event) => {
    event.preventDefault();

    const id = dataById.id;
    const data = {
      companyName,
      image,
    };
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    const res = await dispatch(updateCompany(id, formData))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));

    console.log(res.error);
    window.location.reload();
  };

  const deleteById = async (id) => {
    const res = await dispatch(deleteCompany(id))
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
              <h3>Companies</h3>
            </div>
            <button
              type="button"
              className="btn btn-blue btn-sm me-2 mb-3"
              data-bs-toggle="modal"
              data-bs-target="#addCompany"
            >
              <img src={inputIcon} alt="icon" />
              Add company
            </button>
            <div className="table-responsive">
              <table className="table table-striped table-sm text-center bg-white">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Logo</th>
                    <th scope="col">Company</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((company, no) => (
                    <tr key={company.id}>
                      <td>{no + 1}</td>
                      <td>
                        <img
                          src={company.companyImage}
                          alt=""
                          className="comp"
                        />
                      </td>
                      <td>{company.companyName}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => getById(company.id)}
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#editCompany"
                        >
                          <img src={editIcon} alt="icon" />
                        </button>
                        <button
                          type="button"
                          onClick={() => getById(company.id)}
                          className="btn btn-blue btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteCompany"
                        >
                          <img src={deleteIcon} alt="icon" />
                        </button>
                        <a href="/" className="btn btn-sm btn-blue">
                          <img src={detailIcon} alt="Icon" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ADD COMPANY */}

            <div
              className="modal fade"
              id="addCompany"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={createCompanyForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Company
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
                          Logo Perusahaan
                        </label>
                        <input
                          onChange={(e) => setImage(e.target.files[0])}
                          type="file"
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
                          Nama Perusahaan
                        </label>
                        <input
                          value={companyName}
                          onChange={handleCompanyName}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
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

            {/* EDIT COMPANY */}

            <div
              className="modal fade"
              id="editCompany"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                  <form onSubmit={updateCompanyForm}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Company
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
                          Logo Perusahaan
                        </label>
                        <input
                          onChange={(e) => setImage(e.target.files[0])}
                          type="file"
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
                          Nama Perusahaan
                        </label>
                        <input
                          value={companyName}
                          onChange={handleCompanyName}
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Input"
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

            {/* DELETE COMPANY */}

            <div
              className="modal fade"
              id="deleteCompany"
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
export default DashboardCompany;
