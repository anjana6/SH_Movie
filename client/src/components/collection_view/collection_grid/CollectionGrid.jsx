import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieCard from '../../movie_card/MovieCard'
import SearchBar from '../search_bar/SearchBar'
import * as tmdbApiService from '../../../services/tmdbApiService'

import './collection_grid.scss'

const CollectionGrid = (props) => {
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [pageNumberLimit, setPageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
    const pages = [...Array(totalPage + 1).keys()].slice(1)


    const { keyword,pageNumber } = useParams()
    const navigate = useNavigate()
    const { category, type } = props


    useEffect(() => {
        let minPageNumber = Number(pageNumber)%pageNumberLimit==0? Number(pageNumber)-pageNumberLimit: Number(pageNumber)-Number(pageNumber)%pageNumberLimit
        setMinPageNumberLimit(minPageNumber)
        setMaxPageNumberLimit(minPageNumber+pageNumberLimit)
        getList()
    }, [category, type, keyword,pageNumber])

    const getList = async () => {
        try {
            if (keyword === undefined) {
                const params = {page:pageNumber}
                const res = await tmdbApiService.fetchFilterList(category, type, {params})
                setItems(res.data.results);
                setTotalPage(res.data.total_pages)
            } else {
                const params = {
                    query: keyword,
                    page:pageNumber
                }
                const res = await tmdbApiService.search(category, { params })
                setItems(res.data.results);
                setTotalPage(res.data.total_pages)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleNext = () => {
        keyword ? navigate(`/${category}/search/${keyword}/${Number(pageNumber) + 1}`, { replace: true }) 
        : navigate(`/${category}/${type}/${Number(pageNumber) + 1}`)

    }

    const handlePrev = () => {
        keyword ? navigate(`/${category}/search/${keyword}/${Number(pageNumber) - 1}`, { replace: true }) 
        : navigate(`/${category}/${type}/${Number(pageNumber) - 1}`)
    }

    const handlePage = (e) => {
        keyword ? navigate(`/${category}/search/${keyword}/${e.target.id}`, { replace: true }) 
        : navigate( `/${category}/${type}/${e.target.id}`)
    }

    return (
        <Fragment>
            <div className="section mb-3 search-bar">
                <SearchBar category={props.category} keyword={keyword} />
            </div>
            <div className="collection-grid">
                {
                    items.map(item => <MovieCard key={item.id} category={category} item={item} />)
                }
            </div>
            <div className="section mb-3 pagination-bar">
                <ul className='page_number'>
                    <li>
                        <button disabled={pageNumber == pages[0] ? true : false} onClick={handlePrev} >Prev</button>
                    </li>
                    {minPageNumberLimit >= 1 ? <li onClick={handlePrev}>&hellip;</li> : null}
                    {pages.map(page => {
                        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
                            return (
                                <li key={page} id={page} className={pageNumber == page ? 'active' : null} onClick={(e) => handlePage(e) }>{page}</li>
                            )
                        } else {
                            return null
                        }
                    })}
                    {totalPage > maxPageNumberLimit ? <li onClick={handleNext}>&hellip;</li> : null}
                    <li>
                        <button onClick={handleNext} disabled={pageNumber == totalPage ? true : false}>Next</button>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default CollectionGrid