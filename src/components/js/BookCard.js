"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BookCard = function (_a) {
    var book = _a.book;
    return (react_1["default"].createElement("div", { className: "bg-gray-200/50 p-3 border border-gray-200 rounded-xl shadow-lg hover:scale-105 transition-transform" },
        react_1["default"].createElement("div", { className: "h-full flex flex-col gap-3  items-center " },
            react_1["default"].createElement("div", { className: "card-image border border-gray-400 justify-self-start" },
                react_1["default"].createElement("a", { href: "/" + book.id }, book.image ? (react_1["default"].createElement("img", { className: "", src: book.image, alt: book.title })) : (react_1["default"].createElement("img", { className: "", src: "https://prometheus-platform.github.io/Example_of_course_project_2/static/media/imageNotFound.298b98203c3825c61303.png", width: 250, height: 328, alt: book.title })))),
            react_1["default"].createElement("div", { className: "h-full card-content flex flex-col justify-between justify-self-end gap-3" },
                react_1["default"].createElement("div", { className: "flex justify-center text-center font-bold text-gray-700 items-center" }, book.title),
                react_1["default"].createElement("hr", { className: "border-gray-400" }),
                react_1["default"].createElement("div", { className: "flex justify-center text-center font-medium text-gray-500 items-start" }, book.author),
                react_1["default"].createElement("div", { className: "flex justify-between" },
                    react_1["default"].createElement("span", { className: "pl-3 font-bold text-xl text-red-500" },
                        "$",
                        book.price),
                    react_1["default"].createElement("button", { className: "px-3 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white font-medium transition-colors" }, "View"))))));
};
exports["default"] = BookCard;
