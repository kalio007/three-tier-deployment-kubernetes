// populateDB.js
require("dotenv").config();
const mongoose = require("mongoose");

const Question = require("./Question");
const { data } = require("./data");

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connection established"))
  .catch((err) => console.error("MongoDB connection error:", err));

const importData = async () => {
  try {
    await Question.deleteMany();
    await Question.insertMany(data);
    console.log("Data successfully imported to MongoDB!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error importing data:", error);
    mongoose.disconnect();
  }
};

importData();
