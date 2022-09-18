"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/games", (request, response) => {
    return response.status(200).json([]);
});
app.post("/ads", (request, response) => {
    return response.status(201).json([]);
});
app.get("/games/:id/ads", (request, response) => {
    const gameId = request.params.id;
    return response.status(200).json([{ message: "Dist directory babyyyy" }, { message: "Ts-node-dev" }]);
});
app.get("/ads/:id/discord", (request, response) => {
    const adsId = request.params.id;
    return response.status(200).json(adsId);
});
app.listen(3333);
