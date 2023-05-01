import * as admin from 'firebase-admin';
import { RequestHandler } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/connection";
import publicRoutes from './routes/routes';
import userRoutes from './routes/userRoutes';
import { initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

import * as serviceAccount from './service-account.json';

initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

dotenv.config();
const app = express();
const port: string = process.env.PORT || "5000";

//middleware config
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

// https://firebase.google.com/docs/admin/setup
// https://firebase.google.com/docs/auth/admin#id_token_verification
// https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_the_firebase_admin_sdk
const checkIfUserIsLoggedIn: RequestHandler = (req, res, next) => {
  const idToken = `${req.headers.idtoken}` || 'unknown';

  if (!idToken) {
    return res.status(400).json({message: 'idToken is undefined'});
  }

  if (idToken === 'unknown') {
    return res.status(401).json({message: 'not logged in'});
  }

  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log('uid: ', uid);
      console.log('typeof uid: ', typeof uid);
      console.log('uid.length: ', uid.length);
      req.headers = {
        ...req.headers,
        uid,
      }
      next();
    })
    .catch((error) => {
      res.status(401).json({message: error});
    });
}


app.use("/api", publicRoutes);
app.use("/api/user", checkIfUserIsLoggedIn, userRoutes);

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
