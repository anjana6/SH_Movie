import React, { Fragment, useEffect, useState } from 'react'
import './details_banner.scss'
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from '../../../services/tmdbApiService';
import apiConfig from '../../../config/apiConfig';

const DetailsBanner = () => {
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
        {
        item && (
        <>
        <div className="banner" style={{backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`}}></div>
        <div className="mb-3 movie-content">
            <div className="movie-content_poster">
                <div className="movie-content_poster_img" style={{backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})`}}></div>
            </div>
            <div className="movie-content_info">
            <div className="title">
                    {item.title || item.name}
                </div>
                <div className="genres">
                    {
                        item.genres && item.genres.map((genre,i) => <span className='genres_item' key={i}>{genre.name}</span>)
                    }
                </div>
                <p className="overview">{item.overview}</p>
                <div className="cast">
                    <div className="section_header">
                        <h3>Casts</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
          
        )
      }
    </Fragment>
  )
}

export default DetailsBanner