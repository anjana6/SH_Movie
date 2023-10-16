import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import CollectionView  from '../pages/CollectionView'
const PageRoute = () => {
  return (
      <Routes>
         <Route index element={<Home/>} path='/'></Route>
         <Route element={<CollectionView/>} path='/:category/search/:keyword'/>
         <Route element={<Detail/>} path='/:category/:id'></Route>
         <Route element={<CollectionView />} path='/:category'></Route>
         
      </Routes>
  )
}

export default PageRoute