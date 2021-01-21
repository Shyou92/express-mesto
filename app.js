const express = require("express");
const router = require("./routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: "6009d1bf6caeab13b456f88b",
  };

  next();
});

app.use("/", express.static(__dirname + "/public"));
app.use("/", router);

app.get("*", function (req, res) {
  res.send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`App is being listened on port ${PORT}`);
});
