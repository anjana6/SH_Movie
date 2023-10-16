import { MOVIE_TYPE, TV_TYPE } from "../constant/movie.constant";
import axiosClient from "./axiosClient"

export const fetchMovieList = (type, params) => {
    const url = 'movie/' + type;
    return axiosClient.get(url, params)
}

export const fetchTvList = (type, params) => {
    const url = 'tv/' + type;
    return axiosClient.get(url, params)
}

export const search = (type, params) => {
    const url = 'search/' + type;
    return axiosClient.get(url, params)
}

export const fetchMovieDetail = (type, id, params) => {
    const url = type + '/' + id;
    return axiosClient.get(url, params)
}

const tmdbApi = {
    // getMovieList: (type, params) => {
    //     const url = 'movie/' + movieType[type];
    //     return axiosClient.get(url, params)
    // },


    // getVideos: (type, params) => {
    //     const url = 'tv/' + tvType[type];
    //     return axiosClient.get(url, params)
    // }
}