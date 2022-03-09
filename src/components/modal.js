import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const validateInput = (field, key) => {
    const validateNode = document.querySelectorAll(`.validate-${field}`);

    if (
      field === "" ||
      (key === "email" && field.substr(-10) !== "@gmail.com")
    ) {
      validateNode.classList.remove("d-none");
    } else {
      validateNode.classList.add("d-none");
    }
  };

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
          <div class="add-user">
            <form>
              <div class="row-me">
                <div class="form-50">
                  <label class="text-left mr-2">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    onBlur={() => validateInput(name, "name")}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div class="validate-name d-none text-danger">
                    *Vui lòng nhập User name
                  </div>
                </div>
                <div class="form-50">
                  <label class="text-right mr-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    onBlur={() => validateInput(password, "password")}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div class="validate-password d-none text-danger">
                    *Vui lòng nhập password
                  </div>
                </div>
              </div>

              <div class="row-me">
                <div class="form-50">
                  <label class="text-left mr-2">First Name</label>
                  <input type="text" name="firstName" />
                </div>
                <div class="form-50">
                  <label class="text-right mr-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    onBlur={() => validateInput(lName, "lastName")}
                    onChange={(e) => setLName(e.target.value)}
                    required
                  />
                  <div class="validate-lastName d-none text-danger">
                    *Vui lòng nhập Last name
                  </div>
                </div>
              </div>

              <div class="row-me">
                <div class="form-50">
                  <label class="text-left mr-2">Role</label>
                  <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="admin">Administrator</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div class="form-50">
                  <label class="text-right mr-2">Status</label>
                  <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div class="w-100">
                <label class="text-left mr-2">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email-add-user"
                  onBlur={() => validateInput("email")}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div class="validate-input d-none text-danger">
                  *Email không đúng định dạng
                </div>
              </div>

              <div class="w-100">
                <label class="text-left mr-2">Phone</label>
                <select name="head-phone" id="head-phone">
                  <option value="+84">+84</option>
                  <option value="+86">+86</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div class="w-100 d-flex align-items-center">
                <label class="text-left mr-2">Address</label>
                <div class="address-add-user">
                  <select
                    name="country"
                    id="country"
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option hidden>Chọn Quốc Gia</option>
                    <option value="1">Việt Nam</option>
                    <option value="2">Lào</option>
                  </select>
                  <select
                    name="city"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                    disabled
                  >
                    <option hidden>Chọn Tỉnh</option>
                  </select>
                  <select
                    name="district"
                    id="district"
                    onChange={(e) => setDistrict(e.target.value)}
                    disabled
                  >
                    <option hidden>Chọn Quận/Huyện</option>
                  </select>

                  <select
                    name="ward"
                    id="ward"
                    onChange={(e) => setWard(e.target.value)}
                    disabled
                  >
                    <option hidden>Chọn xã/phường</option>
                  </select>
                </div>
              </div>
              <div class="w-100">
                <label class="text-right mr-2"></label>
                <input type="text" name="address" />
              </div>

              <div class="w-100 d-flex">
                <label class="text-left mr-2">Note</label>
                <textarea name="note" id="note"></textarea>
              </div>

              <div class="d-flex justify-content-end mt-3">
                <div
                  class="btn btn-secondary"
                  onClick={() => handleClose()}
                >
                  Cancel
                </div>
                <div class="btn btn-success ms-3" onClick={() => handleClose()}>
                  Save
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateModal;
