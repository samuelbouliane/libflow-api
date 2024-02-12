"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
/// <reference types="@kitajs/html/htmx.d.ts" />
const html_1 = require("@kitajs/html");
function index() {
    return (html_1.Html.createElement("div", { id: "me" },
        html_1.Html.createElement("button", { "hx-get": "./bar", "hx-trigger": "click", "hx-target": "#me" }, "Click me to get some data")));
}
exports.index = index;
