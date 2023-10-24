import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail, fetchSimilerMovie } from '../services/tmdbApiService';
import apiConfig from '../config/apiConfig';
import DetailsBanner from '../components/details/details_banner/DetailsBanner';
import MovieVideoList from '../components/details/movie_vedio_list/MovieVideoList';
import MovieList from '../components/home/movie_list/MovieList';
import CastList from '../components/details/cast_list/CastList';
import MovieImageList from '../components/details/movie_image_list/MovieImageList';
import DownloadLinkList from '../components/details/download_link_list/DownloadLinkList'
import { fetchDownloadLink, fetchTitles } from '../services/commonApiService';

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getDetail()
    getSimilarMovies()
  }, [category, id])

  const getDetail = async () => {
    try {
      const res = await fetchMovieDetail(category, id, { params: {} });
      setItem(res.data)
      window.scrollTo(0, 0)
      // fetchDownloadLink('The Equalizer 3', '2023')
      // fetchTitles()
    } catch (error) {
      console.log(error)
    }
  }

  const getSimilarMovies = async () => {
    try {
      const res = await fetchSimilerMovie(category, id)
      setMovies(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      <DetailsBanner item={item} />
      <div className="container">
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h3>Casts</h3>
          </div>
          <CastList id={item?.id} />
        </div>
        <div className="section mb-3">
          <MovieImageList />
        </div>
        <div className="section mb-3">
          <MovieVideoList id={item?.id} />
        </div>
        <div className="section mb-3">
          <DownloadLinkList item={item}/>
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Similar</h2>
          </div>
          <MovieList category={category} items={movies} />
        </div>
      </div>
    </Fragment>
  )
}

export default Detail