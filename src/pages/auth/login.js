import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import * as url from '../../constants';
import "./login.css";

const Login = () => {
  const alert = useAlert();
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let admin = {
    email: "admin@gmail.com",
    password: "admin",
  };
  let user = {
    email: "user@gmail.com",
    password: "user",
  };

  const loginBtn = () => {
    if (email === admin.email && password === admin.password) {
      alert.success("Welcome to dashboard")
      history(url.LOGIN);
    } else if (email === user.email && password === user.password) {
      window.alert("Hi user");
    } else {
      alert("Username or password incorrect. Please re-enter!");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      <div className="login-background">
        <form action="" className="login-form" id="form-login">
          <h1>Login</h1>
          <div className="form-group">
            <i className="far fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            id="btnLogin"
            type="button"
            className="btn-login"
            onClick={() => loginBtn()}
          >
            Login
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
