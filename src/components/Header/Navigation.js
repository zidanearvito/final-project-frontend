import React from "react";
import classes from "./css/Navigation.module.css";
import Button from "../UI/MainButton";
import logo from "./img/logo1.png";
import { logout } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import user from "./img/icon_user.png";

const Navigation = () => {
  const dispatch = useDispatch();

  const token = window.localStorage.getItem("accessToken");

  // console.log(token)
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      aria-label="Offcanvas navbar large">
      <div className="container px-lg-5 my-2">
        <div className={classes.logo}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Lef.id
            </h5>
            <button
              type="button"
              className="btn-close btn-close-black"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className={classes.navItem}>
                <a
                  className={classes.navLink}
                  aria-current="page"
                  href="#ourService">
                  Our Services
                </a>
              </li>
              <li className={classes.navItem}>
                <a className={classes.navLink} href="#destination">
                  Destination
                </a>
              </li>
              <li className={classes.navItem}>
                <a className={classes.navLink} href="#whyUs">
                  Why Us
                </a>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <img
                      src={user}
                      className="rounded-circle ms-auto"
                      width="40px"
                      height="40px"
                      id="profile"
                      alt="User"
                    />
                  </li>
                  <li className="nav-item dropdown ms-1">
                    <a
                      className="nav-link dropdown-toggle text-white ms-auto"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Fullname{" "}
                    </a>
                    <ul className="dropdown-menu me-5">
                      <li>
                        <a className="dropdown-item" href="/">
                          Update profil
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <div onClick={() => dispatch(logout())}>Logout</div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <li className="nav-item ms-2">
                  <a href="/register">
                    <Button>Register</Button>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
