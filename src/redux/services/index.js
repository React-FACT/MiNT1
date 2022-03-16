import axios from "axios";
import * as url from '../../constants';

export const api = {
  async getUsers() {
    const result = await axios.get(`${url.API}/auth/get-all`);
    return result.data.results;
  },

  async getRoles() {
    const result = await axios.get(`${url.API}/role/get-all`);
    return result.data.results;
  },
};
