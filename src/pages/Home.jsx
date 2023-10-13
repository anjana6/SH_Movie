import React, { Fragment } from 'react'
import SlideShow from '../components/slideshow/SlideShow'
import Button from '../components/button/Button'
import {Link} from 'react-router-dom'
import MovieList from '../components/movie_list/MovieList'
import { category, movieType } from '../services/tmdbApiService'
import { CATEGORY, MOVIE_TYPE } from '../constant/movie.constant'
import MovieSection from '../components/movie_section/MovieSection'

const Home = () => {
  return (
    <Fragment>
      <SlideShow/>
      <MovieSection
        sectionHeader="Popular Movies"
        category={CATEGORY.MOVIE}
        type={MOVIE_TYPE.POPULAR}
      />
      <MovieSection
        sectionHeader="Top Rated Movies"
        category={CATEGORY.MOVIE}
        type={MOVIE_TYPE.TOP_RATED}
      />
      <MovieSection
        sectionHeader="Popular TV"
        category={CATEGORY.TV}
        type={MOVIE_TYPE.POPULAR}
      />
      <MovieSection
        sectionHeader="Top Rated TV"
        category={CATEGORY.TV}
        type={MOVIE_TYPE.TOP_RATED}
      />
    
    </Fragment>
    
  )
}

export default Home