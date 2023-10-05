import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
const PageRoute = () => {
  return (
      <Routes>
         <Route Component={Home} path='/'></Route>
         <Route Component={Detail} path='/detail'></Route>
      </Routes>
  )
}

export default PageRoute