import React from "react";
import classes from "../css/Search.module.css";

const Search = () => {
  return (
    <>
      <div id="search" className={classes.card}>
        <form className="row gx-3 gy-2 mx-3 align-items-center">
          <div className="col-4">
            <label htmlFor="specificSizeSelect">Dari</label>
            <select
              //   onChange={driverHandler}
              className="form-select"
              id="specificSizeSelect"
              //   value={driver}
            >
              <option>Pilih Kota</option>
              <option value="1">Semarang</option>
              <option value="2">Jakarta</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeSelect">Tujuan</label>
            <select
              //   onChange={driverHandler}
              className="form-select"
              id="specificSizeSelect"
              //   value={driver}
            >
              <option>Pilih Kota</option>
              <option value="1">Semarang</option>
              <option value="2">Jakarta</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeInputGroupUsername">
              Jumlah Penumpang
            </label>
            <div className="input-group">
              <input
                // onChange={custHandler}
                type="text"
                className="form-control"
                id="inputPenumpang"
                placeholder="Jumlah Penumpang"
                // value={cust}
              />
              <div className="input-group-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-people"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeSelect">Tanggal Pergi</label>
            <input
              //   onChange={dateHandler}
              type="date"
              className="form-control"
              id="inputTanggal"
              //   value={date}
            />
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeSelect">
              Tanggal Pulang (Optional)
            </label>
            <input
              //   onChange={dateHandler}
              type="date"
              className="form-control"
              id="inputTanggal"
              //   value={date}
            />
          </div>
          <div className="col-4">
            <div>
              <button className="btn btn-blue mt-3" type="submit">
                Cari Ticket
              </button>
              {/* <Button type='submit'>Cari Mobil</Button> */}
              {/* {console.log(driver)} */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
