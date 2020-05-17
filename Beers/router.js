const { Router } = require("express");
const router = new Router();
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.APP_KEY;

router.get("/beers", async (req, res) => {
  try {
    const response = await axios(
      `https://sandbox-api.brewerydb.com/v2/beers/?key=${apiKey}`
    );
    console.log("response.data router", response.data);
    res.send(response.data);
  } catch (error) {
    next(error);
  }
});

router.get("/locations", async (req, res) => {
  try {
    const response = await axios(
      `https://sandbox-api.brewerydb.com/v2/locations/?key=${apiKey}`
    );
    res.send(response.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
