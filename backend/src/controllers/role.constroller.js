const { RoleService } = require('../services/role.service');
const _roleService = new RoleService();
const logger = require('../logger/winston.logger');

const getAll = (async (req, res) => {
    res.json(await _roleService.getAll());
});

const getById = (async (req, res) => {
    res.json(await _roleService.getById(req.params.id));
});

const create = (async (req, res) => {
    console.log('body', req.body)
    // res.json(await _roleService.create(req.body));
});

const update = (async (req, res) => {
    res.json(await _roleService.update(parseInt(req.params.id), req.body));
});

const remove = (async (req, res) => {
    try {
        res.json(await _roleService.delete(req.params.id));
    } catch (err) {
        res.status(400).json({ success: false, msg: 'Không thể xóa'})
    }
});

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}