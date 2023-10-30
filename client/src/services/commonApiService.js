import axios from 'axios'

export const fetchMovieDownloadLink = async (name, year) => {
    return axios.post('https://sh-movie-api.vercel.app/api/movie', { name, year })
}
