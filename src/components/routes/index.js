import React from 'react'
import {Route,Routes}from 'react-router-dom'
import Home from '../../pages/home'
import About from '../../pages/about'




export default function AllRouts() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

         </Routes>
    </div>
  )
}

