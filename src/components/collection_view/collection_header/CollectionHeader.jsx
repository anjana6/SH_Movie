import React, { Fragment } from 'react'
import "./collection_header.scss"

const CollectionHeader = (props) => {
  return (
    <Fragment>
    <div className="page-header">
      <h2>{props.header}</h2>
    </div>
  </Fragment>
  )
}

export default CollectionHeader