import React from 'react'
import apiConfig from '../../../config/apiConfig'

import '../slideShow.scss'

const SlideItem = (props) => {
    const {item} = props
    const background = apiConfig.originalImage(item.backdrop_path? item.backdrop_path : item.poster_path);
  return (
    <div className="slide_item"
    style={{backgroundImage: `url(${background})`}}
    >
      <div className="slide_item_content container">
        <div className="slide_item_content_info">
          <h3 className="title">{item.title}</h3>
          <div className="overview">{item.overview}</div>
        </div>
        <div className="slide_item_content_poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="poster" />
        </div>
      </div>
    </div>
  )
}

export default SlideItem