import * as auth from "../constant/auth.constant";

export const authReducer = (state = { users: {huhiu: 'acd'} }, action) => {
  switch (action.type) {
    case auth.GET_USERS_REQUEST:
      return {
        loading: true,
        users: {}
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
  }
};