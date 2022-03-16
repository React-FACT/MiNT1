import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import * as url from "../../constants";
import { Formik } from "formik";
import "./login.css";

const Login = () => {
  const alert = useAlert();
  const history = useNavigate();

  let admin = {
    email: "admin@gmail.com",
    password: "admin",
  };
  let user = {
    email: "user@gmail.com",
    password: "user",
  };

  const loginBtn = (values) => {
    if (values.email === admin.email && values.password === admin.password) {
      alert.success("Welcome to dashboard");
      history(url.LIST_USER);
    } else if (
      values.email === user.email &&
      values.password === user.password
    ) {
      alert.success("Hi user");
    } else {
      alert.error("Username or password incorrect. Please re-enter!");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if(!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <Fragment>
      <div className="login-background">
        <div className="login-form" id="form-login">
          <h1>Login</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => validate(values)}
            onSubmit={(values, { setSubmitting }) => {
              loginBtn(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <i className="far fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <small className="text-danger">{errors.email && touched.email && errors.email}</small>
                
                <div className="form-group">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.password && touched.password && errors.password}
                <button
                  id="btnLogin"
                  type="submit"
                  className="btn-login"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
