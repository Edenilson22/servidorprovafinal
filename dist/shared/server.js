"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("../router");
const server = (0, express_1.default)();
exports.server = server;
server.use((0, cors_1.default)());
server.use(express_1.default.json());
router_1.router.get("/", (req, res) => {
    res.send("UTFPR");
});
server.use(router_1.router);
