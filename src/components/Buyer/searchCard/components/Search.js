import React, { useState } from "react";
import classes from "../css/Search.module.css";

const Search = () => {
  const [typeTrip, setTypeTrip] = useState("");
  console.log(typeTrip);

  const handleTypeTrip = (event) => {
    setTypeTrip(event.target.value);
  };
  return (
    <>
      <div id="search" className={classes.card}>
        <form className="row gx-3 gy-2 mx-3 align-items-center">
          <div className="col-5">
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

          <div className="col-5">
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

          <div className="col-2">
            <div>
              <button className="btn btn-blue mt-3" type="submit">
                Cari Ticket
              </button>
              {/* <Button type='submit'>Cari Mobil</Button> */}
              {/* {console.log(driver)} */}
            </div>
          </div>

          <div className="col-4">
            <label htmlFor="specificSizeSelect">Tipe Penerbangan</label>
            <select
              onChange={handleTypeTrip}
              className="form-select"
              id="specificSizeSelect"
              value={typeTrip}
            >
              <option>Pilih Tipe Penerbangan</option>
              <option value="1">One-Way</option>
              <option value="2">Round-Trip</option>
            </select>
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

          {typeTrip === "2" && (
            <div className="col-4">
              <label htmlFor="specificSizeSelect">Tanggal Pulang</label>
              <input
                //   onChange={dateHandler}
                type="date"
                className="form-control"
                id="inputTanggal"
                //   value={date}
              />
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Search;
