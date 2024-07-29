const router = require("express").Router();
const fs = require("fs/promises");
const path = require("path");
const { getCards, storeCard, deleteCard } = require("../controllers/cards");

/*const filename = path.join(__dirname, "..", "data", "cards.json");*/

router.get("/cards", getCards);

module.exports = router;
