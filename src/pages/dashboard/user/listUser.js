import moment from "moment";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import CreateModal from "../../../components/modal";
import {
  deleteUserAction,
} from "../../../redux/action/auth.action";
import actions from "../../../redux/action";
import * as auth from "../../../redux/constant/auth.constant";

const ListUser = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { users } = useSelector((state) => state.users);
  const { isDeleted, isSuccess } = useSelector((state) => state.user);

  const deleteHandler = (id) => {
    dispatch(deleteUserAction(id));
  };

  useEffect(() => {
    dispatch(actions.getAllUsers());
    
    if (isDeleted) {
      alert.success("Đã xóa thành công người dùng");
      dispatch({ type: auth.DELETE_USER_RESET });
    }

    if (isSuccess) {
      alert.success("Thêm người dùng thành công");
      dispatch({ type: auth.ADD_USER_RESET });
    }
  }, [dispatch, alert, isDeleted, isSuccess]);

  return (
    <div className="table-container">
      <div className="table-wrap">
        <h1 className="text-center">List User</h1>
        <CreateModal />
        <div style={{ margin: "auto", width: "85%" }}>
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr className="table-secondary">
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Created At</th>
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
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{moment(user.createdAt).format("DD-MM-YYYY")}</td>
                    <td>{user.roleName}</td>
                    <td>{user.actived === true ? "Active" : "Inactive"}</td>
                    <td>
                      <div className="btn btn-outline-secondary me-1">
                        <i className="fa-solid fa-eye"></i>
                      </div>
                      <div className="btn btn-outline-primary me-1">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div
                        className="btn btn-outline-danger"
                        onClick={() => deleteHandler(user.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
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
