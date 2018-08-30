module.exports = {
  update,
  insert,
  deleteUser,
  get,
  getAll
};

async function getAll() {
  return await db.User.findAll();
}

async function get(opts) {
  let result = await cache.get(opts.where.name);
  if (result == null) {
    result = await db.User.findOne({
      attributes: opts.attributes,
      where: opts.where
    });
    cache.set(opts.where.name, result);
  }
  return result;

}

async function update(opts) {
  let result = await db.User.update(opts.field, {
    where: opts.where
  });
  if (result) {
    result = await db.User.findOne({
      attributes: opts.attributes,
      where: opts.where
    });
    cache.set(opts.where.name, result);
  }
  return result;
}

async function insert(opts) {
  return await db.User.create({
    name: opts.name
  });
}

async function deleteUser(opts) {
  return await db.User.destroy({
    where: opts.where
  });
}