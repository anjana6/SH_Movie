import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import MovieCard from '../../movie_card/MovieCard';

import 'swiper/css';
import 'swiper/css/bundle'
import "./movie_list.scss"


const MovieList = (props) => {
    const { category, items } = props;

    return (
        <div className="movie-list">
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item) =>
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item} category={category} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default MovieList