import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
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
      // window.alert("Xin chào admin");
      history("/list-users");
    } else if (email === user.email && password === user.password) {
      window.alert("Xin chào user");
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại!");
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
