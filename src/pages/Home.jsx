import React, { Fragment } from 'react'
import SlideShow from '../components/slideshow/SlideShow'
import Button from '../components/button/Button'
import {Link} from 'react-router-dom'
import MovieList from '../components/movie_list/MovieList'
import { category, movieType } from '../services/tmdbApiService'
import { CATEGORY, MOVIE_TYPE } from '../constant/movie.constant'

const Home = () => {
  return (
    <Fragment>
      <SlideShow/>
    <div className="container">
      <div className="section mb-3">
        <div className="section_header mb-2">
          <h2>Trending Movies</h2>
          <Link to="/movie">
            <Button className="btn-outline small">View more</Button>
          </Link>
        </div>
        <MovieList category={CATEGORY.MOVIE} type={MOVIE_TYPE.POPULAR}/>
      </div>
    </div>
    </Fragment>
    
  )
}

export default Home