import React from 'react'
import { Link } from 'react-router-dom'
import moment from"moment";
import apiConfig from '../../config/apiConfig'

import "./movie_card.scss"

const MovieCard = (props) => {
    const {item,category} = props

    const background = apiConfig.w500Image(item.poster_path || item.backdrop_path)
  return (
    <Link to={`/${category}/detail/${item.id}`}>
        <div className="movie-card" style={{backgroundImage: `url(${background})`}}>
            <h5 className='site-name'>SH Movie</h5>
        </div>
        <h4>{item.title || item.name}</h4>
        <h6>{moment(item.release_date).format('ll')}</h6>
    </Link>
  )
}

export default MovieCard