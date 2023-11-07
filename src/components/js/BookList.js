"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BookCard_1 = require("./BookCard");
var BookList = function (_a) {
    var books = _a.books;
    return (
    // <div className="flex justify-center">
    react_1["default"].createElement("div", { className: "flex flex-wrap justify-between gap-8 px-3" }, books &&
        books.map(function (book) { return react_1["default"].createElement(BookCard_1["default"], { key: book.id, book: book }); }))
    // </div>
    );
};
exports["default"] = BookList;
