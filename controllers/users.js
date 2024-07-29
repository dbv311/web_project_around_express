const UserInfo = require("../models/user");

const allUsers = (req, res) => {
  UserInfo.find({}).then((user) => {
    res.send(user);
  });
};

const userId = (req, res) => {};

const newUser = (req, res) => {};

module.exports = { allUsers, userId, newUser };
