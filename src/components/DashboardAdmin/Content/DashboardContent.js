import React, { useEffect, useState } from "react";
import "./css/Content.css";
import Dashboard from "../Index";
import companyIcon from "../Sidebar/img/company.svg";
import airplaneIcon from "../Sidebar/img/airplane.svg";
import ticketIcon from "../Sidebar/img/ticket.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAirport } from "../../../store/actions/airport";
import { getCompany } from "../../../store/actions/company";
import { getAirplane } from "../../../store/actions/airplane";
import LoadPage from "../../UI/LoadPage";
import { getTicket } from "../../../store/actions/ticket";

const DashboardContent = () => {
  const dispatch = useDispatch();
  const dataAirport = useSelector((state) => state.airportReducer.data);
  const dataCompany = useSelector((state) => state.companyReducer.data);
  const dataAirplane = useSelector((state) => state.airplaneReducer.data);
  const dataTicket = useSelector((state) => state.ticketReducer.data);
  const [loading, setLoading] = useState(true);
  // console.log(dataTicket)

  useEffect(() => {
    dispatch(getAirport());
    dispatch(getCompany());
    dispatch(getAirplane());
    dispatch(getTicket());
  }, [dispatch]);

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
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-orange">
                  <div className="inner">
                    <h3>{dataCompany.totalData}</h3>

                    <h5>Companies</h5>
                  </div>
                  <img src={companyIcon} alt="icon" className="icon" />
                  <a
                    href="/dashboard/admin/companies"
                    className="small-box-footer"
                  >
                    More info <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-orange">
                  <div className="inner">
                    <h3>{dataAirport.totalData}</h3>

                    <h5>Airports</h5>
                  </div>
                  <img src={airplaneIcon} alt="icon" className="icon" />
                  <a
                    href="/dashboard/admin/airports"
                    className="small-box-footer"
                  >
                    More info <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-orange">
                  <div className="inner">
                    <h3>{dataAirplane.totalData}</h3>

                    <h5>Airplanes</h5>
                  </div>
                  <img src={airplaneIcon} alt="icon" className="icon" />
                  <a
                    href="/dashboard/admin/airplanes"
                    className="small-box-footer"
                  >
                    More info <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-orange">
                  <div className="inner">
                    <h3>{dataTicket.totalData}</h3>

                    <h5>Tickets</h5>
                  </div>
                  <img src={ticketIcon} alt="icon" className="icon" />
                  <a
                    href="/dashboard/admin/tickets"
                    className="small-box-footer"
                  >
                    More info <i className="fa fa-arrow-circle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-3 mb-3 border-bottom">
              <h3>Data Pembelian Ticket</h3>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-sm text-center bg-white">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default DashboardContent;
