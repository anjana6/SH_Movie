import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/button/Button'
import MovieList from '../movie_list/MovieList'

const MovieSection = (props) => {
  return (
    <div className="container">
      <div className="section mb-3">
        <div className="section_header mb-2">
          <h2>{props.sectionHeader}</h2>
          <Link to="/movie">
            <Button className="btn-outline small">View more</Button>
          </Link>
        </div>
        <MovieList category={props.category} type={props.type}/>
      </div>
    </div>
  )
}

export default MovieSection