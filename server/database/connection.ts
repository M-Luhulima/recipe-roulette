import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${<string>process.env.MONGODB_USER}:${<string>process.env.MONGODB_PASSWORD}@recipe-roulette.hpufv49.mongodb.net/?retryWrites=true&w=majority`
    );
      console.log("Database is connected");
    } catch (err) {
      console.log(`Error connecting to MongoDB: ${err}`);
    }
};

export default connectDB;