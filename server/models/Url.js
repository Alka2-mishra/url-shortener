const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortCode: String,
    shortUrl: String,
    clicks: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

module.exports = mongoose.model("Url", urlSchema);