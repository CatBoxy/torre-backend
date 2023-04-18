const express = require("express");
const router = express.Router();
const axios = require("axios");

const userData = async (req, res) => {
  axios
    .get("https://torre.bio/api/bios/juancruzlambrechts")
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

router.get("/", userData);

module.exports = router;
