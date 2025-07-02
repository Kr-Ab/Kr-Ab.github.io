const express = require("express");
const path = require("path");
const app = express();

// Serve profile.json and static assets
app.use("/api/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/profile.json"));
});

// Serve static files from React build
app.use(express.static(path.join(__dirname, "../build")));

// Fallback to React index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
