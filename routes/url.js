const express = require("express");
const router = express.Router();
const { handleGenerateNewShortUrl, getAnalysis } = require("../controllers/url");

router.post("/", handleGenerateNewShortUrl);
router.get("/analytics/:shortId", getAnalysis);

module.exports = router;
