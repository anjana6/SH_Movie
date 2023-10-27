import { CATEGORY } from "../constant/movie.constant";
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

export const fetchCredits = (type, id) => {
    const url = type + '/' + id + '/credits'
    return axiosClient.get(url)
}

export const fetchSimilerMovie = (type, id) => {
    const url = type + '/' + id + '/similar'
    return axiosClient.get(url)
}

export const fetchMovieVideos = (type, id) => {
    const url = type + '/' + id + '/videos'
    return axiosClient.get(url)
}

export const fetchMovieImages = (type, id) => {
    const url = type + '/' + id + '/images'
    return axiosClient.get(url)
}

export const fetchFilterList = (category, type, params) => {
    switch (category) {
        case CATEGORY.MOVIE:
            return fetchMovieList(type, params)
        default:
            return fetchTvList(type, params)
    }
}