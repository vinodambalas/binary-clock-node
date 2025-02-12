const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Basic route to check if server is running
app.get("/", (req, res) => {
  res.send("Hello, Binary Clock!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
