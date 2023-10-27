const { Router } = require("express");
const fetchMovieDownloadLink = require('./controller/movie.controller')

const movieRoute = Router()

movieRoute.post('/', fetchMovieDownloadLink)

module.exports = movieRoute

