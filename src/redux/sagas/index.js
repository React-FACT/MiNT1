import { api } from "../services";
import {
  take,
  put,
  call,
  fork,
  select,
  takeEvery,
  all,
} from "redux-saga/effects";
import actions from "../action/index";
import * as auth from "../constant/auth.constant";
import * as role from '../constant/role.constant'

export function* getAllUsers() {
  const users = yield call(api.getUsers);
  yield put(actions.receiveUsers(users));
}

export function* getAllRoles() {
  const roles = yield call(api.getRoles);
  yield put(actions.receiveRoles(roles));
}

export function* watchGetUsers() {
  yield takeEvery(auth.GET_USERS_REQUEST, getAllUsers);
  yield takeEvery(role.GET_ROLES_REQUEST, getAllRoles)
}
