"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SidebarTogleButton_1 = require("./ui/SidebarTogleButton");
var MainButton_1 = require("./ui/MainButton");
var auth_1 = require("../api/auth");
var CartButton_1 = require("./ui/CartButton");
var AppContext_1 = require("../store/AppContext");
var Userpic_1 = require("./Userpic");
var Header = function () {
    var user = AppContext_1.useContextSelector(function (state) { return state.user; });
    var updateContext = AppContext_1.useContextUpdate();
    var signinClick = function () {
        auth_1.fakeAuthProvider.signin("test").then(function (user) {
            updateContext({ user: user });
        });
    };
    var signoutClick = function () {
        auth_1.fakeAuthProvider.signout();
        updateContext({ user: null });
    };
    return (react_1["default"].createElement("header", { className: "flex justify-center fixed w-full transition-colors backdrop-blur bg-white/50 supports-backdrop-blur:bg-white/50 border-b border-slate-900/10 shadow-md z-50" },
        react_1["default"].createElement("div", { className: "container flex justify-between items-center py-2 px-3 gap-2" },
            react_1["default"].createElement("div", { className: "flex gap-2 items-center" },
                react_1["default"].createElement(SidebarTogleButton_1["default"], null),
                react_1["default"].createElement("div", { className: "mx-4 text-slate-700 whitespace-nowrap font-bold  " },
                    react_1["default"].createElement("span", { className: "text-2xl" }, "X-course task / Pavlo Retivoi"))),
            react_1["default"].createElement("div", { className: "flex gap-2" },
                react_1["default"].createElement(CartButton_1["default"], { count: 0 }),
                user ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement(Userpic_1["default"], { user: user }),
                    react_1["default"].createElement(MainButton_1["default"], { onClick: signoutClick }, "Sign Out"))) : (react_1["default"].createElement(MainButton_1["default"], { onClick: signinClick }, "Sign In"))))));
};
exports["default"] = Header;
