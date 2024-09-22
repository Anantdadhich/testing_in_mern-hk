"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const inputttile = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.post("/sum", (req, res) => {
    const parseResponse = inputttile.safeParse(req.body);
    if (!parseResponse.success) {
        return res.status(411).json({
            message: "incorrect inputs"
        });
    }
    const answer = parseResponse.data.a + parseResponse.data.b;
    res.json({
        answer
    });
});
exports.app.get("/sum", (req, res) => {
    const parseResponse = inputttile.safeParse({
        a: Number(req.headers['a']),
        b: Number(req.headers['b'])
    });
    if (!parseResponse.success) {
        return res.status(411).json({
            message: "incorrect inputs"
        });
    }
    const answer = parseResponse.data.a + parseResponse.data.b;
    res.json({
        answer
    });
});
