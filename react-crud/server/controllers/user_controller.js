const db = require("../models");

const getUsers = async (req, res) => {
  const result = await db.User.findAll();
  res.json(result);
};

const createUsers = async (req, res) => {
  const result = await db.User.create(req.body);
  res.json(result);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const result = await db.User.update(req.body, {
    where: { id },
  });

  res.json(result);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await db.User.destroy({
    where: { id },
  });

  res.json(result);
};

module.exports = { getUsers, createUsers, updateUser, deleteUser };
