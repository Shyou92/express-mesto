/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */

const path = require("path");
const readJson = require("../utils/readJSONFromFile");

const getUsers = (req, res) => {
  const fileName = path.join(__dirname, "..", "data", "users.json");
  readJson(fileName)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(`${err}`);
    });
};

const getSingleUser = (req, res) => {
  const { id } = req.params;
  const fileName = path.join(__dirname, "..", "data", "users.json");
  readJson(fileName)
    .then((users) => {
      const user = users.find((user) => user._id === id);
      if (!user) {
        return res.status(404).send({ message: "Нет пользователя с таким id" });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send(`${err}`);
    });
};

module.exports = {
  getUsers,
  getSingleUser,
};
