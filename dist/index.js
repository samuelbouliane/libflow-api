"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const process_1 = require("process");
const app = (0, express_1.default)();
const port = process_1.env.PORT || "5173";
app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to the TypeScript Node Server</h1>
    <button>Click me</button>
  `);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
