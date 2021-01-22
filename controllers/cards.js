const Card = require('../models/card');
const {
  ERROR_CODE_400,
  ERROR_CODE_404,
  ERROR_CODE_500,
} = require('../utils/errorConfig');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      if (err.name === 'Not Found') {
        return res.status(ERROR_CODE_404).send('Карточки не найдены');
      }
      return res.status(ERROR_CODE_500).send({ message: 'Произошла ошибка' });
    });
};

const createCard = (req, res) => {
  const { name, link, owner } = req.body;

  Card.create({ name, link, owner })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(ERROR_CODE_400).send('Введите корректные данные');
      }
      return res.status(ERROR_CODE_500).send({ message: 'Произошла ошибка' });
    });
};

const deleteCard = (req, res) => {
  const id = req.params.cardId;

  Card.findByIdAndRemove(id)
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(500).send(`${err}`));
};

const likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },

  { new: true },
)
  .then((card) => res.status(200).send({ data: card }))
  .catch((err) => res.status(500).send(`${err}`));

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(500).send(`${err}`));
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
