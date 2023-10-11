import axiosClient from "./api"


export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcomming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    upcomming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const fetchMovieList = (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, { params: params })
}

export const fetchTvList = (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params)
}

const tmdbApi = {
    // getMovieList: (type, params) => {
    //     const url = 'movie/' + movieType[type];
    //     return axiosClient.get(url, params)
    // },

    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params)
    },

    getVideos: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params)
    }
}