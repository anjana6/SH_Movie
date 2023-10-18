import React, { Fragment, useEffect, useRef, useState } from 'react'
import './movie_video_list.scss'
import { useParams } from 'react-router-dom';
import { fetchMovieVideos } from '../../../services/tmdbApiService';
import apiConfig from '../../../config/apiConfig';

const MovieVideoList = (props) => {
  const {id} = props
  const {category} =  useParams();
  const iframeRef = useRef(null);

    const [videos,setVideos] = useState([]);

    useEffect(() => {
      if(id){
        getVideos()
      }
    },[category,id])

    useEffect(() => {
      const height = iframeRef?.current?.offsetWidth * 9 /16 + 'px';
      console.log('heeeeeeee',height)
        iframeRef.current?.setAttribute('height', '5000px');
    },[])

    const getVideos = async () => {
        const res = await fetchMovieVideos(category,id)
        setVideos(res.data.results)
    }


  return (
    <Fragment>
      {
        videos.map((item,i) => (
          <div className="video">
            <div className="video_title">
              <h2>{item.name}</h2>
            </div>
            <iframe 
              src={`https://www.youtube.com/embed/${item.key}`} 
              ref={iframeRef}
              width="80%"
              title="video"
              ></iframe>
          </div>
        ))
      }
    </Fragment>
  )
}

export default MovieVideoList