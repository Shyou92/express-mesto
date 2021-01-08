const fs = require("fs").promises;

const readJson = (path) => {
  return fs.readFile(path).then((text) => {
    return JSON.parse(text);
  });
};

module.exports = readJson;
