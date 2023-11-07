"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MainButton = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (react_1["default"].createElement("button", { className: "flex items-center justify-center w-24 h-10 m-1 px-3  rounded-full bg-slate-500 hover:bg-slate-400 text-white transition-colors font-medium", onClick: onClick }, children));
};
exports["default"] = MainButton;
