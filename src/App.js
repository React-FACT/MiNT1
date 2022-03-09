import "./App.css";
import ListUser from "./pages/dashboard/user/listUser";
import Login from "./pages/auth/login";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/list-users" exact element={<ListUser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
