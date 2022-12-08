import React from "react";
import { logout } from "../../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/MainButton";
import "../css/Dashboard.css";
import logo from "./img/logo1.png";

const HeaderAdmin = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.authReducer);
  console.log(userName);

  return (
    <header className="navbar fixed-top bg-blue flex-md-nowrap p-0 shadow">
      <a className="col-md-5 col-lg-2 ms-2 px-3 fs-6" href="/dashboard/admin">
        <img src={logo} alt="Logo" width={"120px"} />
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap me-5">
          <a href="/login/admin">
            <Button onClick={() => dispatch(logout())}>Logout</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
