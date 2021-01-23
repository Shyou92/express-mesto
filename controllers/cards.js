const Card = require("../models/card");

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      if (err.name === "Not Found") {
        return res.status(404).send("Карточки не найдены");
      }
      return res.status(500).send({ message: "Произошла ошибка" });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  console.log();
  res.setHeader("Content-Type", "application/json");

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send("Введите корректные данные");
      }
      return res.status(500).send({ message: "Произошла ошибка" });
    });
};

const deleteCard = (req, res) => {
  const id = req.params.cardId;

  if (!id) {
    res.status(404).send("Такой карточки не существует");
  }

  Card.findByIdAndRemove(id)
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(400).send(`${err}`));
};

const likeCard = (req, res) => {
  const id = req.params.cardId;

  if (!id) {
    res.status(404).send("Такой карточки не существует");
  }

  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },

    { new: true }
  )
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(400).send(`${err}`));
};

const dislikeCard = (req, res) => {
  const id = req.params.cardId;

  if (!id) {
    res.status(404).send("Такой карточки не существует");
  }

  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(400).send(`${err}`));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
