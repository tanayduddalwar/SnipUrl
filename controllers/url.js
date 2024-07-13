const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
    console.log('Request Body:', req.body);

    const { url } = req.body; // Destructure url from the request body
    console.log('Redirect URL:', url);

    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        console.log('Current User:', req.user);
        console.log(`Generating new short URL for user: ${req.user._id} with redirect URL: ${url}`);

        if (!url) {
            return res.status(400).json({ message: "Url is required" });
        }

        const shortId = shortid.generate();
        const newUrl = {
            shortId,
            redirecturl: url, // Use redirecturl to match schema
            visithistory: [],
            createdby: req.user._id, // Use createdby to match schema
        };

        console.log('Creating URL with the following data:', newUrl);

        await URL.create(newUrl);

        console.log(`Short URL created successfully with short ID: ${shortId}`);
        const allUrls = await URL.find({ createdby: req.user._id });

        return res.render("home", {
            id: shortId,
            urls: allUrls,
        });
    } catch (error) {
        console.error('Error during URL generation:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function getAnalysis(req, res) {
    const shortId = req.params.shortId;

    try {
        console.log(`Fetching analysis for short ID: ${shortId}`);

        const urlEntry = await URL.findOne({ shortId, createdby: req.user._id });

        if (!urlEntry) {
            return res.status(404).json({ message: "URL not found or not authorized" });
        }

        return res.render("analysis", {
            url: urlEntry,
        });
    } catch (error) {
        console.error('Error during URL analysis fetch:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = {
    handleGenerateNewShortUrl,
    getAnalysis,
};
