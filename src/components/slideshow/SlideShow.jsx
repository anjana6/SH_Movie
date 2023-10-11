import React, { useEffect, useState } from 'react'
import './slideShow.scss'
import { fetchMovieList, movieType } from '../../services/tmdbApiService'
import { Swiper, SwiperSlide } from 'swiper/react'
import apiConfig from '../../config/apiConfig'
import { Autoplay,Navigation,Scrollbar, A11y,Zoom,Pagination,Virtual } from 'swiper/modules';
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
            const res =  await fetchMovieList(movieType.popular, {params})
            setMovies(res.data.results.slice(0,5))
            console.log('xxxxxxxxxxxxx',res.data.results)
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
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <img src={apiConfig.originalImage(movie.backdrop_path)} width="100%" height="500px"/>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default SlideShow