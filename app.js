const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const userApi = require("./routes/api/user");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

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
