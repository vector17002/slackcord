import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (error) {
    console.log("Error connecting database", error.message);
  } finally {
    console.log("Connected to database");
  }
};

export default dbConnect;
