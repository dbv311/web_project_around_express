const router = require("express").Router();

const {
  allUsers,
  getUser,
  newUser,
  updateUser,
  updateAvatar,
} = require("../controllers/users");

router.post("/users", newUser);

router.get("/users", allUsers);

router.get("/users/:id", getUser);

router.patch("/users/me", updateUser);

router.patch("/users/me/avatar", updateAvatar);

module.exports = router;
