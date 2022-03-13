const express = require('express');
const RoleRouting = express.Router();
const { CommonMethodConstant, ControllerConstant } = require("../constants/api.constant");
const {
  getAll,
  getById,
  create,
  update,
  remove
} = require('../controllers/role.constroller');
RoleRouting.use(express.json())

RoleRouting.get(CommonMethodConstant.GetAll, getAll);
RoleRouting.get(CommonMethodConstant.GetById, getById);
RoleRouting.post(CommonMethodConstant.Create, create);
RoleRouting.put(CommonMethodConstant.Update, update);
RoleRouting.delete(CommonMethodConstant.Delete, remove);

module.exports = { RoleRouting };