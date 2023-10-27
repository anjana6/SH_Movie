import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieImages } from '../../../services/tmdbApiService'
import apiConfig from '../../../config/apiConfig'

import './movie_image_list.scss'

const MovieImageList = () => {
    const [images, setImages] = useState([])
    const { category, id } = useParams()

    useEffect(() => {
        getList()
    }, [id])

    const getList = async () => {
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
                images.slice(4, 8).map((item) => (
                    <div className="images_item" key={item.id}>
                        <img className="images_item_img" src={`${apiConfig.originalImage(item.file_path)}`} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default MovieImageList