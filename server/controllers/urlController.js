const Url = require("../models/Url");
const { nanoid } = require("nanoid");

exports.shortenUrl = async (req, res) => {
    const { originalUrl } = req.body;

    const shortCode = nanoid(6);

    const shortUrl =
        `${process.env.BASE_URL}/${shortCode}`;

    const url = await Url.create({
        originalUrl,
        shortCode,
        shortUrl
    });

    res.json(url);
};

exports.redirectUrl = async (req, res) => {
    const { shortCode } = req.params;

    const url = await Url.findOneAndUpdate(
        { shortCode },
        { $inc: { clicks: 1 } },
        { new: true }
    );

    if (!url) {
        return res.status(404).json({ message: "Short URL not found" });
    }

    return res.redirect(url.originalUrl);
};