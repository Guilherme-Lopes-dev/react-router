import React from 'react'
import './Content.css'
import {Routes, Route} from "react-router-dom"
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Params from './Params'

const Content = (props) => {
  return (
    <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/param/:id" element={<Params />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*"  />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
  )
}

export default Content
