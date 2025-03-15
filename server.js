const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/jobboard", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await fetchJobListings("Product Manager"); // Fetch job listings
    res.json(jobs); // Send job listings as response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job listings" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
