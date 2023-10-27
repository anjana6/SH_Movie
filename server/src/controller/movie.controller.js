const movieDownloadlink = require("../Service/movie.service")
const crypto = require("crypto");

const fetchMovieDownloadLink = async (req, res) => {
    try {
        console.log(crypto.randomBytes(32).toString("base64"));
        const body = req.body
        const links = await movieDownloadlink(body.name, body.year)
        res.status(200).json(links)
    } catch (error) {
        res.status(400).json("Links not found")
    }

}

module.exports = fetchMovieDownloadLink