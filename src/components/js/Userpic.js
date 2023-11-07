"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Userpic = function (_a) {
    var user = _a.user;
    return (react_1["default"].createElement("div", { className: "flex h-10 items-center m-1 rounded-full border border-slate-400 bg-slate-50/50 hover:bg-slate-50/90 text-slate-800 transition-colors" },
        react_1["default"].createElement("span", { className: "px-4 font-medium" }, user.username),
        react_1["default"].createElement("span", { className: " rounded-full" },
            react_1["default"].createElement("img", { className: "w-12 h-12 img-fluid bg-white rounded-full outline outline-2 outline-gray-300", src: user.image, alt: "userimage" }))));
};
exports["default"] = Userpic;
