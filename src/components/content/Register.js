import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import classes from "./css/Register.module.css";
import logo from "./img/logo.png";
import { register } from "../../store/actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const registForm = (event) => {
    event.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(register(data, history));
  };

  return (
    <div className="wrapper d-flex justify-content-center position-relative mt-5">
      <div className={classes.box}>
        <div className={classes.leftBox}>
          <div className={classes.appTitle}>
            Lef<span className="fw-bold">.id!</span>
          </div>
          <h5 className={classes.textJoin}>Join Us!</h5>
          <p className={classes.textCreate}>Create your account</p>

          <form onSubmit={registForm}>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value={firstName}
                onChange={handleFirstName}
                type="text"
                className="form-control"
                placeholder="First Name"
                required="required"
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value={lastName}
                onChange={handleLastName}
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                required="required"
              />
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value={password}
                onChange={handlePassword}
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
              />
            </div>
            {/* <div className="input-group mb-3 px-5">
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
                required="required"
              />
            </div> */}
            <div className="text-center">
              <Button type="submit">Register</Button>
            </div>
          </form>
          <div>
            <p className={classes.login}>
              already have an account?
              <a href="/login">Sign in</a>
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
