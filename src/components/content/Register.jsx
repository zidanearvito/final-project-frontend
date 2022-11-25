import React from "react";
import Button from "../UI/Button";
import classes from "./css/Register.module.css";
import logo from "./img/logo.png";

const Register = () => {
  return (
    <div className="wrapper d-flex justify-content-center position-relative mt-5">
      <div className={classes.box}>
        <div className={classes.leftBox}>
          <div className={classes.appTitle}>
            Lef<span className="fw-bold">.id!</span>
          </div>
          <h5 className={classes.textJoin}>Join Us!</h5>
          <p className={classes.textCreate}>Create your account</p>
          <form>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value=""
                onChange=""
                type="text"
                className="form-control"
                placeholder="First Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="username"
                required
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value=""
                onChange=""
                type="text"
                className="form-control"
                placeholder="Last Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="username"
                required
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value=""
                onChange=""
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="email"
                required
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value=""
                onChange=""
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="password"
                required
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value=""
                onChange=""
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="confirm-password"
                required
              />
            </div>
            <div className="text-center">
              <Button>Register</Button>
            </div>
          </form>
          <div>
            <p className={classes.login}>
              already have an account?
              <a href="/">Sign in</a>
            </p>
          </div>
        </div>
        <div className={classes.rightBox}>
          <img src={logo} alt="" />
          <div className={classes.registTitle}>Let's Flight Indonesia</div>
          <p className={classes.registText}>
            Mau pergi tanpa harus ribet? Pesan tiket pesawatmu sambil rebahan
            aja dengan Lef.id
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
