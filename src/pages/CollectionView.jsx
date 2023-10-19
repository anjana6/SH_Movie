import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import CollectionHeader from '../components/collection_view/collection_header/CollectionHeader'
import CollectionGrid from '../components/collection_view/collection_grid/CollectionGrid'

const CollectionView = () => {
  const {category, type} = useParams()
  return (
    <Fragment>
      <CollectionHeader header={category}/>
      <div className="container">
        <div className="section mb-3">
          <CollectionGrid category={category} type={type}/>
        </div>
      </div>
    </Fragment>
   

  )
}

export default CollectionView 