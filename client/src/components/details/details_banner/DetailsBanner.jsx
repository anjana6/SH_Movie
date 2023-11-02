import React, { Fragment } from 'react'
import moment from 'moment';
import apiConfig from '../../../config/apiConfig';

import './details_banner.scss'

const DetailsBanner = (props) => {
    const { item } = props

    return (
        <Fragment>
            {
                item && (
                    <>
                        <div className="banner" style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})` }}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content_poster">
                                <div className="movie-content_poster_img" style={{ backgroundImage: `url(${apiConfig.originalImage(item.poster_path || item.backdrop_path)})` }}></div>
                            </div>
                            <div className="movie-content_info">
                                <div>
                                    <div className="title">
                                        {item.title || item.name}
                                    </div>
                                    <h4>{moment(item.release_date || item.last_air_date).format('ll')}</h4>
                                </div>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 6).map((genre) => <span className='genres_item' key={genre.id}>{genre.name}</span>)
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="vote">
                                    <h2>{item.vote_average.toFixed(1)}</h2>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </Fragment>
    )
}

export default DetailsBanner