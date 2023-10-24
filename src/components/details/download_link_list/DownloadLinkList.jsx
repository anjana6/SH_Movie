import React, { Fragment, useEffect, useState } from 'react'
import './download_link_list.scss'
import { fetchMovieDownloadLink } from '../../../services/commonApiService'
import Button from '../../common/button/Button'

const DownloadLinkList = (props) => {
    const [links, setLinks] = useState([])
    const {item} = props

    useEffect(() => {
        if(item?.title && item?.release_date){
            getList(item.title,item.release_date)
        }
    },[item])

    const getList = async (title,releaseDate) => {
        const date = new Date(releaseDate)
        const year = date.getFullYear()
        try {
            const res = await fetchMovieDownloadLink(title,year )
            setLinks(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Fragment>
        <div className="movie_download">
            <div className="movie_download_section">
                <h2 className='title mb-1'>Direct Download Link</h2>
                {
                    links.map((link,index) => {
                        return(
                            <div className='mb-2' key={index}>
                                <div className="mb-1">
                                    <h4>{link.details}</h4>
                                </div>
                                <div className="movie_download_link">
                                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                                        <Button className="btn-default small">Download</Button>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </Fragment>
  )
}

export default DownloadLinkList