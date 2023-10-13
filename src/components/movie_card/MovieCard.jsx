import React from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../../config/apiConfig'
import "./movie_card.scss"

const MovieCard = (props) => {
    const {item,id} = props

    const background = apiConfig.w500Image(item.poster_path || item.backdrop_path)
  return (
    <Link to="#">
        <div className="movie-card" style={{backgroundImage: `url(${background})`}}>
            <h5 className='site-name'>SH Movie</h5>
        </div>
        <h6>{item.title || item.name}</h6>
    </Link>
  )
}

export default MovieCard