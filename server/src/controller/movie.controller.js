const movieDownloadlink = require("../Service/movie.service")
const crypto = require("crypto");

const fetchMovieDownloadLink = async (req, res) => {
    try {
        const body = req.body
        const links = await movieDownloadlink(body.name, body.year)
        res.status(200).json(links)
    } catch (error) {
        console.log('eeeeeeeeeeee', error)
        res.status(400).json(error)
    }

}

const test = async (req, res) => {
    try {
        res.status(200).json("test")
    } catch (error) {
        res.status(400).json(error)
    }

}


module.exports = { fetchMovieDownloadLink, test }