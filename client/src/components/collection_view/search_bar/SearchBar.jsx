import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputComponent from '../../common/input/InputComponent'
import Button from '../../common/button/Button'
import { useOnKeyPress } from '../../../hooks/useOnKeyPress'

import "./search_bar.scss"

const SearchBar = (props) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')

  const goToSearch = useCallback(
    () => {
      if (keyword.trim().length > 0)
        navigate(`/${props.category}/search/${keyword}`, { replace: true })
    }, [keyword, props.category]
  )

  useOnKeyPress(goToSearch, 'Enter')

  return (
    <div className="movie-search">
      <InputComponent
        type="text"
        placeholder="Ënter Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="btn-default small" onClick={goToSearch}>Search</Button>
    </div>
  )
}

export default SearchBar