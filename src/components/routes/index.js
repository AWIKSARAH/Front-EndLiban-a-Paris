import React from 'react'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
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

          {/* <Route path="/test" element={(
            <div>
              <h2>Test page</h2>
            </div>
          )} /> */}

          {/* <Route path="/redirect" element={<Navigate to="/about" />} /> */}

          {/* <Route 
            path="/checkout" 
            element={false ? <Navigate to="/products" /> : <p>checkout</p>}
          /> */}