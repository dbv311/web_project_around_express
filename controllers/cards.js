const CardModel = require("../models/cards");

const handleError = require("../utils/HandleError");

const getCards = (req, res) => {
  CardModel.find({}).then((cards) => {
    res.send(cards);
  });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  CardModel.create({ name, link, owner: req.user._id })
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

const cardLike = (req, res) => {
  CardModel.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  );
};

const cardDislike = (req, res) => {
  CardModel.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  );
};

module.exports = { getCards, createCard, deleteCard, cardLike, cardDislike };
