import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import addressData from "../addressData.json";
import { createUserAction } from "../redux/action/auth.action";
import { getRolesAction } from "../redux/action/role.action";
import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CreateModal = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const { roles } = useSelector((state) => state.roles);
  const { isSuccess } = useSelector((state) => state.user);

  const submitHandle = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      alert.error("Please enter full information");
    } else {
      const address = `${ward}, ${district}, ${city}, ${country}`;
      dispatch(
        createUserAction({ username, email, password, address, roleId })
      );
    }
  };

  useEffect(() => {
    dispatch(getRolesAction());

    if (isSuccess) {
      handleClose();
    }
  }, [dispatch, isSuccess]);

  return (
    <div
      className="d-flex justify-content-end m-2"
      style={{ paddingRight: "135px" }}
    >
      <div onClick={handleOpen} className="btn btn-primary">
        ADD
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="add-user">
            <form onSubmit={submitHandle}>
              <div className="row-me">
                <div className="form-50">
                  <label className="text-left mr-2">Họ và tên</label>
                  <input
                    type="text"
                    name="userName"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-50">
                  <label className="text-right mr-2">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row-me">
                <div className="form-50">
                  <label className="text-left mr-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFName(e.target.value)}
                  />
                </div>
                <div className="form-50">
                  <label className="text-right mr-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={(e) => setLName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row-me">
                <div className="form-50">
                  <label className="text-left mr-2">Role</label>
                  <select
                    name="role"
                    defaultValue={roles && roles[0]?.id}
                    className="form-select w-25 d-inline-block"
                    onChange={(e) => setRoleId(e.target.value)}
                  >
                    {roles?.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-50">
                  <label className="text-right mr-2">Status</label>
                  <select
                    name="status"
                    className="form-select w-25 d-inline-block"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="w-100">
                <label className="text-left mr-2">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email-add-user"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="w-100">
                <label className="text-left mr-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="w-100 d-flex align-items-center">
                <label className="text-left mr-2">Address</label>
                <div className="address-add-user">
                  <select
                    name="country"
                    id="country"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option selected value="1">
                      Việt Nam
                    </option>
                  </select>
                  <select
                    name="city"
                    id="city"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option hidden>Vui lòng chọn thành phố/tỉnh...</option>
                    {addressData?.map((tp) => (
                      <option key={tp.Id} value={tp.Name}>
                        {tp.Name}
                      </option>
                    ))}
                  </select>
                  <select
                    name="district"
                    id="district"
                    className="form-control"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  >
                    <option hidden>Vui lòng chọn quận/huyện...</option>
                    {addressData &&
                      addressData.map(
                        (tp) =>
                          tp.Name === city &&
                          tp.Districts.map((h) => (
                            <option key={h.Id} value={h.Name}>
                              {h.Name}
                            </option>
                          ))
                      )}
                  </select>

                  <select
                    name="ward"
                    id="ward"
                    className="form-control"
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    required
                  >
                    <option hidden>Vui lòng chọn xã/phường...</option>
                    {addressData &&
                      addressData.map(
                        (tp) =>
                          tp.Name === city &&
                          tp.Districts.map(
                            (h) =>
                              h.Name === district &&
                              h.Wards.map((x) => (
                                <option key={x.Id} value={x.Name}>
                                  {x.Name}
                                </option>
                              ))
                          )
                      )}
                  </select>
                </div>
              </div>
              <div className="w-100">
                <label className="text-right mr-2"></label>
                <input type="text" name="address" />
              </div>

              <div className="w-100 d-flex">
                <label className="text-left mr-2">Note</label>
                <textarea name="note" id="note"></textarea>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <div
                  className="btn btn-secondary"
                  onClick={() => handleClose()}
                >
                  Cancel
                </div>
                <button type="submit" className="btn btn-success ms-3">
                  Save
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateModal;
