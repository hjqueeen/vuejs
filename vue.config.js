const fs = require("fs");
const path = require("path");

const privateBooksPath = path.resolve(__dirname, "src/data/books.private.js");
const stubBooksPath = path.resolve(__dirname, "src/data/books.stub.js");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "books-private-extra": fs.existsSync(privateBooksPath) ? privateBooksPath : stubBooksPath,
      },
    },
  },
};
