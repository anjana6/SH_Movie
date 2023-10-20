import React, { useEffect, useState } from 'react'
import './movie_image_list.scss'
import { fetchMovieImages } from '../../../services/tmdbApiService'
import { useParams } from 'react-router-dom'
import apiConfig from '../../../config/apiConfig'

const MovieImageList = (props) => {
    const [images, setImages] = useState([])
    const {category, id} = useParams()

    useEffect(() => {
        getList()
    },[id])

    const getList = async() => {
        try {
            const res = await fetchMovieImages(category, id)
            setImages(res.data.backdrops)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="images">
        {
            images.slice(6,10).map((item, i) => (
                <div className="images_item" key={i}>
                    {/* <div className="casts_item_img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div> */}
                    <img className="images_item_img" src={`${apiConfig.originalImage(item.file_path)}`} alt="" />
                        
                </div>
            ))
        }
    </div>
  )
}

export default MovieImageList