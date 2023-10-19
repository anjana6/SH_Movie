import React, { Fragment } from 'react'
import "./collection_header.scss"
import { CATEGORY } from '../../../constant/movie.constant'

const CollectionHeader = (props) => {
  return (
    <Fragment>
    <div className="page-header">
      <span></span>
      <h2>{props.header === CATEGORY.MOVIE? 'Movies': 'TV Serious'}</h2>
      <span></span>
    </div>
  </Fragment>
  )
}

export default CollectionHeader