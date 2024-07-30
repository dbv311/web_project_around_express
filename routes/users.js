const router = require("express").Router();

const { allUsers, getUser, newUser } = require("../controllers/users");

router.post("/users", newUser);

router.get("/users", allUsers);

router.get("/users/:id", getUser);

module.exports = router;
