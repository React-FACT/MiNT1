import * as auth from "../constant/auth.constant";
import * as url from '../../constants';
import axios from 'axios'

export const getUsersAction = () => async (dispatch) => {
  try {
    dispatch({ type: auth.GET_USERS_REQUEST });

    const { data } = await axios.get(`${url.API}/auth/get-all`);

    dispatch({ type: auth.GET_USERS_SUCCESS, payload: data.results });
  } catch (err) {
    dispatch({ type: auth.GET_USERS_FAIL });
  }
};

export const createUserAction = (dataAdd) => async (dispatch) => {
  try {
    dispatch({ type: auth.ADD_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${url.API}/auth`,
      dataAdd,
      config
    );

    dispatch({ type: auth.ADD_USER_SUCCESS, payload: data.results });
  } catch (err) {
    dispatch({ type: auth.ADD_USER_FAIL });
  }
};

export const deleteUserAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: auth.DELETE_USER_REQUEST });

    const { data } = await axios.delete(
      `${url.API}/auth/${id}`
    );
    console.log('data', data);

    dispatch({ type: auth.DELETE_USER_SUCCESS, payload: data.results });
  } catch (err) {
    dispatch({ type: auth.DELETE_USER_FAIL });
  }
};
