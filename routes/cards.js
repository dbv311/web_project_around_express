const router = require("express").Router();
const {
  getCards,
  createCard,
  deleteCard,
  cardLike,
  cardDislike,
} = require("../controllers/cards");

router.get("/cards", getCards);

router.post("/cards", createCard);

router.delete("/cards/:cardId", deleteCard);

router.put("/cards/:cardId/likes", cardLike);

router.delete("/cards/:cardId/likes", cardDislike);

module.exports = router;
