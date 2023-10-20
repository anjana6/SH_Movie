import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCredits } from '../../../services/tmdbApiService';
import apiConfig from '../../../config/apiConfig';
import './cast_list.scss'

const CastList = (props) => {
    const {category,id} =  useParams();
    // const {id} = props;

    const [casts,setCasts] = useState([]);

    useEffect(() => {
        getCredits()
    },[category,id])

    const getCredits = async () => {
        const res = await fetchCredits(category,id)
        setCasts(res.data.cast)
    }


  return (
    <div className="casts">
        {
            casts.slice(0,6).map((item, i) => (
                <div className="casts_item" key={i}>
                    {/* <div className="casts_item_img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div> */}
                    <img className="casts_item_img" src={`${apiConfig.w500Image(item.profile_path)}`} alt="" />
                    <div className="casts_item_info">
                        <div>
                            <h4 className="casts_item_name">{item.name}</h4>
                            <h5>{item.character}</h5>
                        </div>
                            
                    </div>
                        
                </div>
            ))
        }
    </div>
  )
}

export default CastList