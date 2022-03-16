import * as auth from "../constant/auth.constant";
import * as role from "../constant/role.constant";

const actions = {
  getAllUsers() {
    return {
      type: auth.GET_USERS_REQUEST,
    };
  },

  receiveUsers(users) {
    return {
      type: auth.GET_USERS_SUCCESS,
      payload: users,
    };
  },

  getAllRoles() {
    return {
      type: role.GET_ROLES_REQUEST,
    };
  },

  receiveRoles(roles) {
    return {
      type: role.GET_ROLES_SUCCESS,
      payload: roles,
    };
  },
};

export default actions;
