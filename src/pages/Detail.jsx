import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail } from '../services/tmdbApiService';
import apiConfig from '../config/apiConfig';
import DetailsBanner from '../components/details/details_banner/DetailsBanner';
import MovieVideoList from '../components/details/movie_vedio_list/MovieVideoList';
import MovieList from '../components/home/movie_list/MovieList';

const Detail = () => {
  const {category, id} = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      getDetail()
    }, [category,id])
  
    const getDetail = async() => {
      const response = await fetchMovieDetail(category,id,{params:{}});
      setItem(response.data)
      window.scrollTo(0,0)
    }
  return (
    <Fragment>
      <DetailsBanner item={item}/>
      <div className="container">
        <div className="section mb-3">
          <MovieVideoList id={item?.id} />
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Similar</h2>
          </div>
          <MovieList category={category} type="similar" movieId={id}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Detail