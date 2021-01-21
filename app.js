const express = require("express");
const router = require("./routes");

const { PORT = 3000 } = process.env;

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/", router);

app.get("*", function (req, res) {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`App is being listened on port ${PORT}`);
});