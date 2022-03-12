const { AuthenticationService } = require("../services/authentication.service");
const authenticationService = new AuthenticationService();
const mysql = require('mysql8');

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'training',
  port: 3306,
  user: 'root',
  password: '123456',
});

const authGetAll = async (req, res) => {
  // res.json(await authenticationService.getAll());
  const query = 'select auth.*, role.name as roleName from authentication as auth left join role on auth.roleId = role.id';

  connection.query(query, (err, result, fields) => {
    if (err) throw err;
    res.json({ results: result })
  })
};

const authGetById = async (req, res) => {
  res.json(await authenticationService.getById(req.params.id));
};

const createUser = async (req, res) => {
  console.log('body', req.body);
  res.json(await authenticationService.create(req.body));
};

const updateUser = async (req, res) => {
  res.json(await authenticationService.update(parseInt(req.params.id), req.body));
};

const removeUser = async (req, res) => {
  try {
    res.json(await authenticationService.delete(req.params.id));
  } catch (err) {
    res.status(400).json({ success: false, msg: "Không thể xóa" });
  }
};

module.exports = {
  authGetAll,
  authGetById,
  createUser,
  updateUser,
  removeUser,
};
