import * as role from "../constant/role.constant";

export const roleReducer = (state = {roles: []}, action) => {
  switch (action.type) {
    case role.GET_ROLES_REQUEST:
      return {
        loading: true,
      };
    case role.GET_ROLES_SUCCESS:
      return {
        loading: false,
        roles: action.payload,
      };
    case role.GET_ROLES_FAIL:
      return {
        ...state,
        error: "Error get role",
      };

    default:
      return state;
  }
};