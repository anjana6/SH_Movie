import React, { useCallback, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import "./search_bar.scss"
import InputComponent from '../../common/input/InputComponent'
import Button from '../../common/button/Button'


const SearchBar = (props) => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState(props.keyword? props.keyword: '')
  

  const goToSearch = useCallback(
    () => {
      if(keyword.trim().length > 0)
      console.log('xxxxxxxxxxxxxxxx', props.category)
      navigate(`/${props.category}/search/${keyword}`, {replace: true})
    }, [keyword,props.category]
  )

  useEffect(()=> {
    const enterEvent = (e) => {
      e.preventDefault();
      if(e.keyCode === 13){
        goToSearch();
      }
    }
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent)
    }
  }, [keyword,goToSearch])

  return (
    <div className="movie-search">
      <InputComponent 
        type="text"
        placeholder="Ënter Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>Search</Button>
    </div>
  )
}

export default SearchBar