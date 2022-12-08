import "../css/Dashboard.css";
import homeIcon from "./img/home.svg";
import airplaneIcon from "./img/airplane.svg";
import companyIcon from "./img/company.svg";
import ticketIcon from "./img/ticket.svg";

const SidebarAdmin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block sidebar collapse bg-grey">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column mt-2 ms-3">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/dashboard/admin">
                  <img src={homeIcon} alt="Home icon" className="me-3" />
                  <span className=" mt-5">Dashboard</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/admin/companies">
                  <img src={companyIcon} alt="Company icon" className="me-3" />
                  <span className="align-text-bottom mt-5"></span>
                  Companies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/admin/airports">
                  <img
                    src={airplaneIcon}
                    alt="Airplane icon"
                    className="me-3"
                  />
                  <span className="align-text-bottom mt-5"></span>
                  Airports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/admin/airplanes">
                  <img
                    src={airplaneIcon}
                    alt="Airplane icon"
                    className="me-3"
                  />
                  <span className="align-text-bottom mt-5"></span>
                  Airplanes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/admin/tickets">
                  <img src={ticketIcon} alt="Ticket icon" className="me-3" />
                  <span className="align-text-bottom mt-5"></span>
                  Tickets
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SidebarAdmin;
