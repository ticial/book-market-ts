"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var react_router_dom_1 = require("react-router-dom");
var GradientBg_1 = require("../components/ui/GradientBg");
var Layout = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(GradientBg_1["default"], null),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("main", { className: "wrapper container h-full self-center mt-20 mb-8 flex flex-col justify-center" },
            react_1["default"].createElement(react_router_dom_1.Outlet, null)),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = Layout;
