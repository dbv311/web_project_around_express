const CardModel = require("../models/cards");

const handleError = require("../utils/HandleError");

const getCards = (req, res) => {
  CardModel.find({}).then((cards) => {
    res.send(cards);
  });
};

const storeCard = (req, res) => {
  const { name, link, ownerId, likes, createAt } = req.body;
  CardModel.create({ name, link, owner: ownerId, likes, createAt })
    .then((card) => {
      res.send(card);
    })
    .catch((error) => {
      res.status(403).send(error);
    });
};

const deleteCard = (req, res) => {
  const cardId = req.params.cardId;
  CardModel.findByIdAndDelete(cardId)
    .orFail(() => {
      const error = new Error("NOT_FOUND");
      error.statusCode = 404;
      throw error;
    })
    .then(() => {})
    .catch(handleError);
};

module.exports = { getCards, storeCard, deleteCard };
