const userService = require('../services/userService');

module.exports = {
  get,
  update,
  insert,
  deleteUser,
  index
};

async function index(req, res, next) {
  let users = await userService.getAll();
  res.locals.users = users;
  return res.render('index');
}

async function get(req, res, next) {
  let opts = {attributes: ['id', 'name', 'age'], where: {name: req.query.name}};
  let result = await userService.get(opts);
  if (result) {
    return res.json({result});
  } else {
    return res.json({msg: '查询失败'});
  }
}

async function update(req, res, next) {
  let opts = {field: {name: req.body.name, age: req.body.age}, where: {id: req.params.id}};
  try {
    let result = await userService.update(opts);
    if (result) {
      return res.json({msg: '更新成功', data: result});
    } else {
      return res.json({msg: "更新失败"})
    }
  } catch (err) {
    return res.json({msg: '更新失败', err: err})
  }
}

async function insert(req, res, next) {
  let opts = {name: req.body.name};
  let result = await userService.insert(opts);
  if (result) {
    return res.json({msg: '插入成功', data: result});
  } else {
    return res.json({msg: '插入失败'});
  }
}

async function deleteUser(req, res, next) {
  let opts = {where: {id: req.params.id}};
  let result = await userService.deleteUser(opts);
  if (result) {
    return res.json({msg: "删除成功", data: result});
  } else {
    return res.json({msg: '删除失败', data: result})
  }
}