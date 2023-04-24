import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/connection";

dotenv.config();
const app = express();
const port: string = process.env.PORT || "5000";

//middleware config
app.use(cors());
app.use(express.json());

// Connect to the database
connectDB();

app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
