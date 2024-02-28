import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts/>}>
          <Route index element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App