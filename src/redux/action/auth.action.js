import * as auth from "../constant/auth.constant";

let users = [
  {
    id: 1,
    name: "Nguyễn Văn Tèo",
    email: "teo@gmail.com",
    birthday: "21-12-1999",
    admin: true,
    status: true,
  },
  {
    id: 2,
    name: "Nguyễn Thị Tẻng",
    email: "teng@gmail.com",
    birthday: "12-12-1999",
    admin: false,
    status: true,
  },
  {
    id: 3,
    name: "Nguyễn Văn Bé Em",
    email: "beem@gmail.com",
    birthday: "21-12-1999",
    admin: true,
    status: false,
  },
  {
    id: 4,
    name: "Nguyễn Văn Tuấn Anh",
    email: "tuananh@gmail.com",
    birthday: "21-12-1999",
    admin: true,
    status: true,
  },
  {
    id: 5,
    name: "Nguyễn Thị Bé Tý",
    email: "bety@gmail.com",
    birthday: "21-12-1999",
    admin: true,
    status: false,
  },
  {
    id: 6,
    name: "Nguyễn Văn Tủn",
    email: "tun@gmail.com",
    birthday: "21-12-1999",
    admin: true,
    status: true,
  },
  {
    id: 7,
    name: "Nguyễn Thương Tính",
    email: "ttinh@gmail.com",
    birthday: "21-12-1999",
    admin: true,
    status: true,
  },
];
export const getUsersAction = () => async (dispatch) => {
  try {
    dispatch({ type: auth.GET_USERS_REQUEST });

    dispatch({ type: auth.GET_USERS_SUCCESS, payload: users });
  } catch (err) {
    dispatch({ type: auth.GET_USERS_FAIL });
  }
};
