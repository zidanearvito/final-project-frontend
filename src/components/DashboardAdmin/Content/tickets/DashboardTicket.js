import Dashboard from "../../Index";
import editIcon from "../img/edit.svg";
import deleteIcon from "../img/trash.svg";
import detailIcon from "../img/eye.svg";
import inputIcon from "../img/input.svg";
import warning from "../img/warning.png";

const DashboardTicket = () => {
  return (
    <>
      {" "}
      <Dashboard />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-5 pt-3">
        <div className="mt-3 mb-3 border-bottom">
          <h3>Tickets</h3>
        </div>
        <button
          type="button"
          className="btn btn-blue btn-sm me-2 mb-3"
          data-bs-toggle="modal"
          data-bs-target="#addTicket">
          <img src={inputIcon} alt="icon" />
          Add ticket
        </button>
        <div className="table-responsive">
          <table className="table table-striped table-sm text-center bg-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-blue btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#editTicket">
                    <img src={editIcon} alt="icon" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-blue btn-sm me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteTicket">
                    <img src={deleteIcon} alt="icon" />
                  </button>
                  <a href="/" className="btn btn-sm btn-blue">
                    <img src={detailIcon} alt="Icon" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ADD AIRPLANE */}

        <div
          className="modal fade"
          id="addTicket"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add Ticket
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Input"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Input"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Input"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
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
                    data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-blue">
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
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit Ticket
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Input"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Input"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Input"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label">
                      Label
                    </label>
                    <input
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
                    data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" className="btn btn-blue">
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
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
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
                  <button type="button" className="btn btn-blue me-3 mt-2">
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    data-bs-dismiss="modal">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default DashboardTicket;
