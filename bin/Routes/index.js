"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Book_route_1 = __importDefault(require("./Book/Book.route"));
var router = (0, express_1.Router)();
router.use('/book', Book_route_1.default);
exports.default = router;
