const User = require('../models/user');
const {
  ERROR_CODE_400,
  ERROR_CODE_404,
  ERROR_CODE_500,
} = require('../utils/errorConfig');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      res.status(500).send(`${err}`);
    });
};

const getSingleUser = (req, res) => {
  const id = req.params._id;
  User.findOne({ id })
    .then((user) => {
      if (!user) {
        return res
          .status(ERROR_CODE_404)
          .send({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(`${err}`);
    });
};
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'ValidationError') {
        return res.status(ERROR_CODE_400).send('Введите корректные данные');
      }
      return res.status(ERROR_CODE_500).send({ message: 'Произошла ошибка' });
    });
};

const updateProfile = (req, res) => {
  const id = req.user._id;

  User.findByIdAndUpdate(id, { name: 'Alex', about: 'Web dev' })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(ERROR_CODE_400).send('Введите корректные данные');
      }
      return res.status(ERROR_CODE_500).send({ message: 'Произошла ошибка' });
    });
};

const updateAvatar = (req, res) => {
  const id = req.user._id;
  console.log(id);

  User.findByIdAndUpdate(id, {
    avatar:
      'https://proofthatblog.com/wp-content/uploads/2013/06/question-mark.jpg',
  })
    .then((user) => res.status(200).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(ERROR_CODE_400).send('Введите корректные данные');
      }
      return res.status(ERROR_CODE_500).send({ message: 'Произошла ошибка' });
    });
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateProfile,
  updateAvatar,
};
