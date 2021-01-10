/* eslint-disable no-multiple-empty-lines */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */

const fs = require("fs").promises;

const readJson = (path) => {
  return fs.readFile(path).then((text) => {
    return JSON.parse(text);
  });
};

module.exports = readJson;
