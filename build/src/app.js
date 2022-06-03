"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PG_PORT || 5000;
const app = (0, express_1.default)();
const index_1 = require("../controllers/index");
app.use(express_1.default.json());
app.get("/", index_1.getData);
app.get("/data/:id", index_1.getDataById);
app.post("/post", index_1.postData);
app.listen(port, () => {
    console.log(`----- server running on port ${port} ----`);
});
