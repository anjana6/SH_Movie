import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import CollectionView  from '../pages/CollectionView'
const PageRoute = () => {
  return (
      <Routes>
         <Route index element={<Home/>} path='/'></Route>
         <Route element={<CollectionView />} path='/:category/:type'></Route>
         <Route element={<CollectionView/>} path='/:category/search/:keyword'/>
         <Route element={<Detail/>} path='/:category/detail/:id'></Route>
         
      </Routes>
  )
}

export default PageRoute