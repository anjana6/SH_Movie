import React, { Fragment, useEffect, useState } from 'react'
import './download_link_list.scss'
import { fetchMovieDownloadLink } from '../../../services/commonApiService'
import Button from '../../common/button/Button'

const DownloadLinkList = (props) => {
    const [links, setLinks] = useState(null)
    const { item } = props
    useEffect(() => {
        if (item?.title && item?.release_date) {
            getList(item.title, item.release_date)
        }
    }, [item])

    const getList = async (title, releaseDate) => {
        const date = new Date(releaseDate)
        const year = date.getFullYear()
        try {
            const res = await fetchMovieDownloadLink(title, year)
            setLinks(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Fragment>
            <div className="movie_download">
                <div className="movie_download_section">
                    <h2 className='title mb-3'>Direct Download Link</h2>
                    {links ? <div className='movie_download_link'>
                        <div className='link-section'>
                            {links?.usersdriveLink.length > 0 ? <>
                                <h3 className='link-section_title'>Usersdrive</h3>
                                <div className="link-section_movie-link">
                                    {
                                        links?.usersdriveLink?.slice(0, 9).map((link, index) => {
                                            return (
                                                <div className='mb-2' key={index}>
                                                    <div className="movie_download_link">
                                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                                            <Button className="btn-default small">Download</Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </> : null}
                        </div>
                        <div className='link-section'>
                            {links?.dropLink.length > 0 ? <>
                                <h3 className='link-section_title'>DROPAPK</h3>
                                <div className="link-section_movie-link">
                                    {
                                        links?.dropLink?.slice(0, 9).map((link, index) => {
                                            return (
                                                <div className='mb-2' key={index}>
                                                    <div className="movie_download_link">
                                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                                            <Button className="btn-default small">Download</Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </> : null}
                        </div>
                    </div> : <h2>Not Available</h2>}
                </div>
            </div>
        </Fragment>
    )
}

export default DownloadLinkList