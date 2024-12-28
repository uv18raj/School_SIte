// Import the required packages
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/students");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS and parse JSON payloads
app.use(
  cors({
    origin:
      process.env.FRONTEND_URL || "https://school-frontend-w9x5.onrender.com/",
  })
);
app.use(express.json());

// Set up the routes
app.use("/api/students", studentRoutes);

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGO_URI || "mongodb://localhost:27017/school-fee-details",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
