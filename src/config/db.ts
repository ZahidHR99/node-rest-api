import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      autoIndex: false,       // ❌ disable in production
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB connected (production)");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
