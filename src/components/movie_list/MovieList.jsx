import React, { useEffect, useState } from 'react'
import "./movie_list.scss"
import * as tmdbApiService from '../../services/tmdbApiService'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay,Navigation,Scrollbar, A11y,Zoom,Pagination,Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { CATEGORY } from '../../constant/movie.constant';
import apiConfig from '../../config/apiConfig';

const MovieList = (props) => {
    const [items, setItems] = useState([]);
    const {category,type} = props;

    useEffect(() => {
        getList()
    },[])

    const getList = async () => {
        let response = null;
        const params = {}
        if(props.type !== 'similar'){
            switch(category){
                case CATEGORY.MOVIE:  
                    response = await tmdbApiService.fetchMovieList(type, {params}) 
                    break
                default: 
                    response = await tmdbApiService.fetchTvList(type, {params})

            }
        }
        else{
            console.log('smiler')
        }
        setItems(response.data.results)
    }
  return (
    <div className="movie-list">
        <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {
                items.map((item,i) => 
                    <SwiperSlide key={i}>
                        <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                    </SwiperSlide>
                )
            }
        </Swiper>
    </div>
  )
}

export default MovieList