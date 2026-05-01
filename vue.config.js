const fs = require("fs");
const path = require("path");

const privateBooksPath = path.resolve(__dirname, "src/data/books.private.js");
const stubBooksPath = path.resolve(__dirname, "src/data/books.stub.js");
const booksPrivateExtraPath = fs.existsSync(privateBooksPath) ? privateBooksPath : stubBooksPath;

/** GitHub 프로젝트 페이지: hjqueeen.github.io/vuejs/ */
const publicPath = process.env.NODE_ENV === "production" ? "/vuejs/" : "/";

module.exports = {
  publicPath,
  chainWebpack: (config) => {
    config.resolve.alias.set("books-private-extra", booksPrivateExtraPath);
  },
};
