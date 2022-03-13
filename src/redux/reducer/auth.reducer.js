import * as auth from "../constant/auth.constant";

export const authReducer = (state = {users: []}, action) => {
  switch (action.type) {
    case auth.GET_USERS_REQUEST:
      return {
        loading: true,
      };
    case auth.GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case auth.GET_USERS_FAIL:
      return {
        ...state,
        error: "Error get user",
      };

    default:
      return state;
  }
};

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case auth.ADD_USER_REQUEST:
    case auth.DELETE_USER_REQUEST:
      return {
        loading: true,
      };

    case auth.ADD_USER_SUCCESS:
      return {
        loading: false,
        isSuccess: true
      };

    case auth.DELETE_USER_SUCCESS:
      return {
        loading: false,
        isDeleted: true
      };

    case auth.ADD_USER_RESET:
      return {
        ...state,
        isSuccess: false
      };

    case auth.DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false
      };

    case auth.ADD_USER_FAIL:
    case auth.DELETE_USER_FAIL:
      return {
        ...state,
        error: "Error get user",
      };

    default:
      return state;
  }
};
