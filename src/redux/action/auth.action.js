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
