import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../../movie_card/MovieCard'
import Button from '../../common/button/Button'
import SearchBar from '../search_bar/SearchBar'
import * as tmdbApiService from '../../../services/tmdbApiService'

import './collection_grid.scss'

const CollectionGrid = (props) => {
    const [items, setItems] = useState([])
    const [page,setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const {keyword} = useParams()
    const {category, type} = props

    useEffect(() => {
        getList()
    },[category, type, keyword])

    const getList = async() => {
        if(keyword === undefined){
           const res = await tmdbApiService.fetchFilterList(category,type)
           setItems(res.data.results);
           setTotalPage(res.data.total_pages)
        }else{
            const params = {
                query: keyword
            }
            const res = await tmdbApiService.search(category, {params})
            setItems(res.data.results);
            setTotalPage(res.data.total_pages)
        }
        
    }

    const loadMore = () => {
        console.log('load')
    }
  return (
    <Fragment>
        <div className="section mb-3 search-bar">
            <SearchBar category={props.category} keyword={keyword}/>
        </div>
    <div className="collection-grid">
        {
            items.map(item => <MovieCard category={category} item={item}/>)
        }
    </div>
    {
        page < totalPage? (
            <div className="collection-grid-loadmore">
                <Button className="outline-btn small" onClick={loadMore}>Load More</Button>
            </div>
        ) : null
    }
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