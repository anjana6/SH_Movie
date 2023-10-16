import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetail } from '../services/tmdbApiService';
import apiConfig from '../config/apiConfig';
import DetailsBanner from '../components/details/details_banner/DetailsBanner';

const Detail = () => {
  // const {category, id} = useParams();
  // const [item, setItem] = useState(null);

  // useEffect(() => {
  //   getDetail()
  // }, [category,id])

  // const getDetail = async() => {
  //   const response = await fetchMovieDetail(category,id,{params:{}});
  //   setItem(response.data)
  //   window.scrollTo(0,0)
  // }

  return (
    <Fragment>
      <DetailsBanner/>
    </Fragment>
  )
}

export default Detail