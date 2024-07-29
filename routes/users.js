const router = require("express").Router();
/*const fs = require("fs/promises");*/
/*const path = require("path");*/
const { allUsers, userId, newUser } = require("../controllers/users");

/*const filename = path.join(__dirname, "..", "data", "users.json");*/

router.get("/users", allUsers);

router.get("/users/:id", (req, res) => {
  fs.readFile(filename).then((content) => {
    const { id } = req.params;
    const usersData = JSON.parse(content.toString());
    const user = usersData.find((item) => item._id === id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({
        message: "NOT FOUND",
      });
    }
  });
});

module.exports = router;
