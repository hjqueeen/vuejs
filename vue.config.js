const fs = require("fs");
const path = require("path");

const privateBooksPath = path.resolve(__dirname, "src/data/books.private.js");
const stubBooksPath = path.resolve(__dirname, "src/data/books.stub.js");
const booksPrivateExtraPath = fs.existsSync(privateBooksPath) ? privateBooksPath : stubBooksPath;

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("books-private-extra", booksPrivateExtraPath);
  },
};
