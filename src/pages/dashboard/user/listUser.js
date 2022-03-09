import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateModal from "../../../components/modal";
import "./listUser.css";
import { getUsersAction } from "../../../redux/action/auth.action";
import store from "../../../redux/store";

const ListUser = () => {
  const dispatch = useDispatch();

  const users = store.getState().users;
  useEffect(() => {
    dispatch(getUsersAction())
  })
  return (
    <div className="table-container">
      <div className="table-wrap">
        <h1 className="text-center">List User</h1>
        <CreateModal />
        <div style={{ margin: "auto", width: "80%" }}>
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr className="table-secondary">
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Admin</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="body-list-user">
              {users?.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.birthday}</td>
                    <td>{user.admin === true ? "Admin" : "User"}</td>
                    <td>{user.status === true ? "Active" : "Inactive"}</td>
                    <td>
                      <div className="btn btn-outline-secondary me-1">
                        <i class="fa-solid fa-eye"></i>
                      </div>
                      <div className="btn btn-outline-primary me-1">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div className="btn btn-outline-danger">
                        <i class="fa-solid fa-trash-can"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
