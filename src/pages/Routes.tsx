import React from 'react'
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom'
import Edit from 'pages/Edit/Edit'
import Home from 'pages/Home/Home'

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path='/home' element={<Home />} />
      <Route path='/edit' element={<Edit />} />
      <Route path='*' element={<Navigate replace to='/home' />} />
    </ReactRouterRoutes>
  )
}

export default Routes
