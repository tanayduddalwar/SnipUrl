const express = require("express");
const router = express.Router();
const URL = require("../models/url");
const { handleGenerateNewShortUrl ,getanalysis} = require("../controllers/url");

// POST route for generating a new short URL
router.post("/", handleGenerateNewShortUrl);

// GET route for redirecting to the original URL and updating visit history
router.get("/analytics/:shortId",getanalysis);

module.exports = router;
