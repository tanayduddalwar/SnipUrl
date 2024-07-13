const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirecturl: { // Field name in lowercase
        type: String,
        required: true,
        unique: true,
    },
    visithistory: [{
        timestamp: { type: Date, default: Date.now }
    }],
    createdby: { // Field name in lowercase
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

const URL = mongoose.model("URL", urlSchema);
module.exports = URL;
