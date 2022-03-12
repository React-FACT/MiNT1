import "./App.css";
import ListUser from "./pages/dashboard/user/listUser";
import Login from "./pages/auth/login";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as url from './constants'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={url.LOGIN} exact element={<Login />}></Route>
        <Route path={url.LIST_USER} exact element={<ListUser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
