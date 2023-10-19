import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules';
import SlideItem from './Includes/SlideItem'
import * as tmdbApiService from '../../services/tmdbApiService';
import { MOVIE_TYPE } from '../../constant/movie.constant'

import './slideShow.scss'
import 'swiper/css';
import 'swiper/css/bundle'

const SlideShow = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        try {
            const params = {page:1}
            const res =  await tmdbApiService.fetchMovieList(MOVIE_TYPE.POPULAR, {params})
            setMovies(res.data.results.slice(0,10))
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='slide_container'>
        <Swiper 
          modules={[Autoplay]} 
          spaceBetween={0} 
          slidesPerView={1}
          autoplay={{delay:5000}} 
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <SlideItem item={movie}/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default SlideShow