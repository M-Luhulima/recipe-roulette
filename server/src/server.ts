import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import scheduleRoutes from './routes/schedule';
import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
// import connectDB from "../database/connection";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.use('/api/schedule', scheduleRoutes);

// Connect to the database
// connectDB();

// const mongoURI = encodeURIComponent(<string>process.env.MONGO_URI);

mongoose.connect(process.env.MONGODB_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
  .then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });