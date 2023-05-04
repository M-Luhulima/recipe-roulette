"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = __importDefault(require("./database/connection"));
const routes_1 = __importDefault(require("./routes/routes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const serviceAccount = __importStar(require("../service-account.json"));
(0, app_1.initializeApp)({
    credential: admin.credential.cert(serviceAccount),
});
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || "5000";
//middleware config
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to the database
(0, connection_1.default)();
// https://firebase.google.com/docs/admin/setup
// https://firebase.google.com/docs/auth/admin#id_token_verification
// https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_the_firebase_admin_sdk
const checkIfUserIsLoggedIn = (req, res, next) => {
    const idToken = `${req.headers.idtoken}` || 'unknown';
    if (!idToken) {
        return res.status(400).json({ message: 'idToken is undefined' });
    }
    if (idToken === 'unknown') {
        return res.status(401).json({ message: 'not logged in' });
    }
    (0, auth_1.getAuth)()
        .verifyIdToken(idToken)
        .then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log('uid: ', uid);
        console.log('typeof uid: ', typeof uid);
        console.log('uid.length: ', uid.length);
        req.headers = Object.assign(Object.assign({}, req.headers), { uid });
        next();
    })
        .catch((error) => {
        res.status(401).json({ message: error });
    });
};
app.use("/api", routes_1.default);
app.use("/api/user", checkIfUserIsLoggedIn, userRoutes_1.default);
// add a middleware to extract the user ID from the request headers and add it to the request object
// app.use((req, _res, next) => {
//   const userId = req.headers['x-user-id'] as string;
//   if (userId) {
//     req.userId = userId; // add the user ID to the request object
//   }
//   next();
// });
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
});
