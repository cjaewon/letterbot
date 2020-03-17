"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_json_1 = __importDefault(require("./data/date.json"));
exports.parser = function () {
    var date = new Date();
    var today = date.getMonth() + 1 + "-" + date.getDate();
    return date_json_1.default[today] || null;
};
