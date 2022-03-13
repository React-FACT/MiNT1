import * as role from '../constant/role.constant';
import * as url from '../../constants';
import axios from 'axios'

export const getRolesAction = () => async (dispatch) => {
  try {
    dispatch({ type: role.GET_ROLES_REQUEST });

    const { data } = await axios.get(`${url.API}/role/get-all`);

    dispatch({ type: role.GET_ROLES_SUCCESS, payload: data.results });
  } catch (err) {
    dispatch({ type: role.GET_ROLES_FAIL });
  }
}