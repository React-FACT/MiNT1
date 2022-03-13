const express = require("express");
const AuthenticationRouting = express.Router();
const {
  CommonMethodConstant,
} = require("../constants/api.constant");
const {
  authGetAll,
  authGetById,
  createUser,
  updateUser,
  removeUser
} = require("../controllers/authentication.constroller");

AuthenticationRouting.use(express.json());

AuthenticationRouting.get(CommonMethodConstant.GetAll, authGetAll);
AuthenticationRouting.get(CommonMethodConstant.GetById, authGetById);
AuthenticationRouting.post(CommonMethodConstant.Create, createUser);
AuthenticationRouting.put(CommonMethodConstant.Update, updateUser);
AuthenticationRouting.delete(CommonMethodConstant.Delete, removeUser);

module.exports = { AuthenticationRouting };
