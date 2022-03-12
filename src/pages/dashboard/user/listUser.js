import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateModal from "../../../components/modal";
import { getUsersAction } from "../../../redux/action/auth.action";

const ListUser = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

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
