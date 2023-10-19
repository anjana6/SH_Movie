import React, { useEffect, useState } from 'react'
import "./movie_list.scss"
import * as tmdbApiService from '../../../services/tmdbApiService'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,Navigation,Scrollbar, A11y,Zoom,Pagination,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { CATEGORY } from '../../../constant/movie.constant';
import apiConfig from '../../../config/apiConfig';
import MovieCard from '../../movie_card/MovieCard';

const MovieList = (props) => {
    // const [items, setItems] = useState([]);
    const {category,items} = props;
    // console.log('11111111111', category,type, movieId)

    // useEffect(() => {
    //     getList()
    // },[type, movieId])

    // const getList = async () => {
    //     let response = null;
    //     const params = {}
    //     if(type !== 'similar'){
    //         switch(category){
    //             case CATEGORY.MOVIE:  
    //                 response = await tmdbApiService.fetchMovieList(type, {params}) 
    //                 break
    //             default: 
    //                 response = await tmdbApiService.fetchTvList(type, {params})

    //         }
    //     }
    //     else{
    //         console.log('smiler', movieId)
    //         if(movieId){
    //             response = await tmdbApiService.fetchSimilerMovie(category,movieId)
    //         }
    //     }

    //     console.log('resssssssss',response)
    //     setItems(response?.data?.results)
    // }
  return (
    <div className="movie-list">
        <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {
                items.map((item) => 
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item} category={category}/>
                    </SwiperSlide>
                )
            }
        </Swiper>
    </div>
  )
}

export default MovieList