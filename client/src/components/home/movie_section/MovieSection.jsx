import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../common/button/Button'
import MovieList from '../movie_list/MovieList'
import { fetchFilterList } from '../../../services/tmdbApiService'


const MovieSection = (props) => {
  const { category, type } = props
  const [items, setItems] = useState([]);

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    try {
      const res = await fetchFilterList(category, type)
      setItems(res?.data?.results)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container">
      <div className="section mb-3">
        <div className="section_header mb-2">
          <h2>{props.sectionHeader}</h2>
          <Link to={`/${category}/${type}`}>
            <Button className="btn-outline small">View more</Button>
          </Link>
        </div>
        <MovieList category={category} type={type} items={items} />
      </div>
    </div>
  )
}

export default MovieSection