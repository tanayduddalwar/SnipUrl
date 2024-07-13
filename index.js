const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const URL = require("./models/url");
const app = express();

// Body parsers and cookie parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
mongoose.set('strictQuery', false);

// Connect to MongoDB Atlas
mongoose.connect(process.env.mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
}).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

// Set up view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Static files
app.use(express.static("public"));

// Routes
const urlRoute = require("./routes/url");
const staticRouter = require("./routes/staticrouter");
const userRoute = require("./routes/user");

// Middleware for routes
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/", checkAuth, staticRouter);
app.use("/user", userRoute);

// Test route to check all URLs
app.get("/test", async (req, res) => {
    try {
        const allUrls = await URL.find({});
        return res.render("home", {
            urls: allUrls,
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// URL redirection with analytics
app.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visithistory: {
                        timestamp: Date.now()
                    }
                }
            }
        );
        if (entry) {
            return res.redirect(entry.redirecturl);
        } else {
            return res.status(404).json({ message: "URL not found" });
        }
    } catch (error) {
        console.error("Error during URL redirection:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start server
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log("Server started at PORT: " + PORT);
});
