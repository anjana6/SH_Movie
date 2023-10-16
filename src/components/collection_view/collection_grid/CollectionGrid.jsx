import React, { Fragment, useEffect, useState } from 'react'
import './collection_grid.scss'
import { useParams } from 'react-router-dom'
import { CATEGORY, MOVIE_TYPE, TV_TYPE } from '../../../constant/movie.constant'
import * as tmdbApiService from '../../../services/tmdbApiService'
import MovieCard from '../../movie_card/MovieCard'
import Button from '../../common/button/Button'
import InputComponent from '../../common/input/InputComponent'
import SearchBar from '../search_bar/SearchBar'

const CollectionGrid = (props) => {
    const [items, setItems] = useState([])
    const [page,setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)

    const {keyword} = useParams()
    const {category} = props

    useEffect(() => {
        getList()
    },[category, keyword])

    const getList = async() => {
        let response = null;

        if(keyword === undefined){
            const params = {}
            switch(category){
                case CATEGORY.MOVIE: 
                response = await tmdbApiService.fetchMovieList(MOVIE_TYPE.UPCOMING, {params})
                break;
                default: 
                response = await tmdbApiService.fetchTvList(TV_TYPE.POPULAR, {params})
            }
        }else{
            const params = {
                query: keyword
            }
            response = await tmdbApiService.search(category, {params})
        }
        setItems(response.data.results);
        setTotalPage(response.data.total_pages)
    }

    const loadMore = () => {
        console.log('load')
    }
  return (
    <Fragment>
        <div className="section mb-3">
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