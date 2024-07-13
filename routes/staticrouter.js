const express = require('express');
const URL = require('../models/url');
const router = express.Router();

// Home route, displays all URLs created by the logged-in user
router.get("/", async (req, res) => {
    if (!req.user) return res.redirect("/login");

    try {
        const allUrls = await URL.find({ createdby: req.user._id });
        return res.render("home", {
            urls: allUrls,
        });
    } catch (error) {
        console.error('Error fetching URLs:', error);
        return res.status(500).send('Internal Server Error');
    }
});

// Signup route
router.get("/signup", (req, res) => {
    return res.render("signup");
});

// Login route
router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;
