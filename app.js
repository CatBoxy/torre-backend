const express = require("express");
const app = express();
const port = process.env.PORT;
app.use(express.static("public"));
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// API Routes
const userApi = require("./routes/api/user");

// API URLs
app.use("/api/user", userApi);
app.use(function (req, res, next) {
  res.status(404).json({
    status: "error 400",
    message: "This page doesnt exist",
  });
});

app.listen(port || 3000, async () => {
  console.log("Server running on port 3000");
});
