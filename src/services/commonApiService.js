import axios from 'axios'

export const fetchMovieDownloadLink = async (name, year) => {
    return axios.post('http://localhost:5000/api/movie', { name, year })
}
