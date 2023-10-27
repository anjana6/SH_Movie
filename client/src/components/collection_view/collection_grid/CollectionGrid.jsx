import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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


    const { keyword } = useParams()
    const { category, type } = props

    useEffect(() => {
        getList()
    }, [category, type, keyword,currentPage])

    const getList = async () => {
        try {
            if (keyword === undefined) {
                const params = {page:currentPage}
                const res = await tmdbApiService.fetchFilterList(category, type, {params})
                setItems(res.data.results);
                setTotalPage(res.data.total_pages)
            } else {
                const params = {
                    query: keyword
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
        setCurrentPage(Number(currentPage) + 1)

        if (Number(currentPage) + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePrev = () => {
        setCurrentPage(Number(currentPage) - 1)
        if ((Number(currentPage) - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
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
                        <button disabled={currentPage == pages[0] ? true : false} onClick={handlePrev} >Prev</button>
                    </li>
                    {minPageNumberLimit >= 1 ? <li onClick={handlePrev}>&hellip;</li> : null}
                    {pages.map(page => {
                        if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
                            return (
                                <li key={page} id={page} className={currentPage == page ? 'active' : null} onClick={(e) => setCurrentPage(e.target.id)}>{page}</li>
                            )
                        } else {
                            return null
                        }
                    })}
                    {totalPage > maxPageNumberLimit ? <li onClick={handleNext}>&hellip;</li> : null}
                    <li>
                        <button onClick={handleNext} disabled={currentPage == totalPage ? true : false}>Next</button>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

// const SearchBar = () => {
//     return (
//       <div className="movie-search">
//         <InputComponent 
//           type="text"
//           placeholder="Ënter Keyword"
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//         />
//       </div>
//     )
//   }

export default CollectionGrid