const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "/notes.json");

const fileWrite = (title, body) => {
  let obj = { title: title, body: body };
  const temp = JSON.stringify(obj);
  fs.writeFileSync(filePath, temp);
};

module.exports = {
  fileWrite: fileWrite,
};
