const express = require("express");
const router = express.Router();
const axios = require("axios");

const getUserData = async (req, res) => {
  const username = req.params.username;
  axios
    .get(`https://torre.bio/api/bios/${username}`)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(404).send(error);
    });
};

router.get("/:username", getUserData);

module.exports = router;
