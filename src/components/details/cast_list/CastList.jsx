import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCredits } from '../../../services/tmdbApiService';
import apiConfig from '../../../config/apiConfig';
import './cast_list.scss'

const CastList = (props) => {
    const {category} =  useParams();

    const [casts,setCasts] = useState([]);

    useEffect(() => {
        getCredits()
    },[category,props.id])

    const getCredits = async () => {
        const res = await fetchCredits(category,props.id)
        setCasts(res.data.cast)
    }


  return (
    <div className="casts">
        {
            casts.slice(0,9).map((item, i) => (
                <div className="casts_item" key={i}>
                    <div className="casts_item_img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts_item_name">{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default CastList