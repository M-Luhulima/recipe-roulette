"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("../database/connection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// app.use('/api/schedule', scheduleRoutes);
// Connect to the database
(0, connection_1.default)();
// mongoose.connect(process.env.MONGODB_URI!, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// } as ConnectOptions)
//   .then(() => {
//     const port = process.env.PORT || 4000;
//     app.listen(port, () => {
//       console.log(`Connected to DB and listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
