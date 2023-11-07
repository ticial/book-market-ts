"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Search_1 = require("../components/Search");
var BookList_1 = require("../components/BookList");
var books_data_1 = require("../api/books_data");
var BookListPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "container flex justify-center top-20 w-full mb-5" },
            react_1["default"].createElement(Search_1["default"], null)),
        react_1["default"].createElement(BookList_1["default"], { books: books_data_1.books_data })));
};
exports["default"] = BookListPage;
