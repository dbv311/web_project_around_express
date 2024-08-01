const UserInfo = require("../models/user");
const handleError = require("../utils/HandleError");

const allUsers = (req, res) => {
  UserInfo.find({}).then((user) => {
    res.send(user);
  });
};

const getUser = (req, res) => {
  UserInfo.findById(req.params.id)
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

const newUser = (req, res) => {
  const { name, about, avatar } = req.body;
  UserInfo.create({ name, about, avatar })
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  UserInfo.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  UserInfo.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

module.exports = { allUsers, getUser, newUser, updateUser, updateAvatar };
