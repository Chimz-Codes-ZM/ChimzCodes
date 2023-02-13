import React from 'react'

import { Routes, Route, useLocation} from 'react-router-dom'

import Main from "./Main.js"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      
      </Routes>
    </div>
  )
}

export default AnimatedRoutes