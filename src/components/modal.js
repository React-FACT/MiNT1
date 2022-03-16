import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addressData from "../addressData.json";
import actions from "../redux/action";
import { createUserAction } from "../redux/action/auth.action";
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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { roles } = useSelector((state) => state.roles);
  const { isSuccess } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(actions.getAllRoles());

    if (isSuccess) {
      handleClose();
    }
  }, [dispatch, isSuccess]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Please enter password";
    }
    if (!values.username) {
      errors.username = "Please enter username";
    }
    return errors;
  };

  const submitHandle = (values) => {
    const address = `${values.ward}, ${values.district}, ${values.city}, Cần Thơ`;
    dispatch(
      createUserAction({
        username: values.username,
        email: values.email,
        password: values.password,
        address: address,
        roleId: values.roleId,
      })
    );
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
          <div className="add-user">
            <Formik
              initialValues={{
                username: "",
                password: "",
                email: "",
                ward: "",
                district: "",
                city: "",
                roleId: "",
              }}
              validate={(values) => validate(values)}
              onSubmit={(values, { setSubmitting }) => {
                submitHandle(values);
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
                  <div className="row-me">
                    <div className="form-50">
                      <label className="text-left mr-2">Họ và tên</label>
                      <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="validate-input text-danger">
                        {errors.username && touched.username && errors.username}
                      </div>
                    </div>
                    <div className="form-50">
                      <label className="text-right mr-2">Mật khẩu</label>
                      <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="validate-input text-danger">
                        {errors.password && touched.password && errors.password}
                      </div>
                    </div>
                  </div>

                  <div className="row-me">
                    <div className="form-50">
                      <label className="text-left mr-2">First Name</label>
                      <input type="text" name="firstName" />
                    </div>
                    <div className="form-50">
                      <label className="text-right mr-2">Last Name</label>
                      <input type="text" name="lastName" />
                    </div>
                  </div>

                  <div className="row-me">
                    <div className="form-50">
                      <label className="text-left mr-2">Role</label>
                      <select
                        name="roleId"
                        // defaultValue={roles && roles[0]?.id}
                        className="form-select w-25 d-inline-block"
                        value={values.roleId}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="validate-input text-danger">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </div>

                  <div className="w-100">
                    <label className="text-left mr-2">Phone</label>
                    <input type="text" name="phone" />
                  </div>

                  <div className="w-100 d-flex align-items-center">
                    <label className="text-left mr-2">Address</label>
                    <div className="address-add-user">
                      <select
                        name="country"
                        id="country"
                        className="form-control"
                      >
                        <option selected value="1">
                          Việt Nam
                        </option>
                      </select>
                      <select
                        name="city"
                        id="city"
                        className="form-control"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                        value={values.district}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option hidden>Vui lòng chọn quận/huyện...</option>
                        {addressData &&
                          addressData.map(
                            (tp) =>
                              tp.Name === values.city &&
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
                        value={values.ward}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option hidden>Vui lòng chọn xã/phường...</option>
                        {addressData &&
                          addressData.map(
                            (tp) =>
                              tp.Name === values.city &&
                              tp.Districts.map(
                                (h) =>
                                  h.Name === values.district &&
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
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateModal;
