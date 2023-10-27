import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieVideos } from '../../../services/tmdbApiService';

import './movie_video_list.scss'

const MovieVideoList = (props) => {
  const { id } = props
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (id) {
      getVideos()
    }
  }, [category, id])

  const getVideos = async () => {
    const res = await fetchMovieVideos(category, id)
    setVideos(res.data.results)
  }

  return (
    <Fragment>
      <div className='videos'>
        {
          videos.slice(0, 2).map((item) => (
            <div className="video" key={item.id}>
              <div className="video_title">
                <h2>{item.name}</h2>
              </div>
              <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                width="100%"
                title="video"
              ></iframe>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}

export default MovieVideoList