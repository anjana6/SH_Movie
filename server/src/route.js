const { Router } = require("express");
const { fetchMovieDownloadLink, test } = require('./controller/movie.controller')

const movieRoute = Router()

movieRoute.post('/', fetchMovieDownloadLink)
movieRoute.get('/', test)
module.exports = movieRoute

