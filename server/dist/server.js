"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./database/connection"));
const routes_1 = __importDefault(require("./routes/routes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || "5000";
//middleware config
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to the database
(0, connection_1.default)();
app.use("/api", routes_1.default);
app.use("/api/user", userRoutes_1.default);
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
});
