import mongoose from "mongoose";

// const mongoPassword = encodeURIComponent(<string>process.env.MONGODB_PASSWORD);
// const mongoPassword = encodeURIComponent(<string>process.env.MONGODB_PASSWORD);
// const mongoUsername = encodeURIComponent(<string>process.env.MONGODB_USER);

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://coderaiders5:${<string>process.env.MONGODB_PASSWORD}@recipe-roulette.hpufv49.mongodb.net/?retryWrites=true&w=majority`
    );
      console.log("Database is connected");
    } catch (err) {
      console.log(`Error connecting to MongoDB: ${err}`);
    }
};

export default connectDB;