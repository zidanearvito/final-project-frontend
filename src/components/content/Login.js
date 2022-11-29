import React, { useState } from "react";
import classes from "./css/Register.module.css";
import logo from "./img/logo.png";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    dispatch(login(data, history));
  };

  return (
    <div className="wrapper d-flex justify-content-center position-relative mt-5">
      <div className={classes.box}>
        <div className={classes.leftBox}>
          <div className={classes.appTitle}>
            Lef<span className="fw-bold">.id!</span>
          </div>
          <h5 className={classes.textJoin}>Join Us!</h5>
          <p className={classes.textCreate}>Login Here</p>

          <form onSubmit={loginForm}>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">
                <img src="" alt="" />
              </span>
              <input
                value={email}
                onChange={ event => setEmail(event.target.value)}
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
                onChange={event => setPassword(event.target.value)}
                type="password"
                className="form-control"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="text-center">
              <Button type="submit">Login</Button>
            </div>
          </form>
          <div>
            <p className={classes.login}>
              didn't have an account?
              <a href="/register">Sign up</a>
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

export default Login;
