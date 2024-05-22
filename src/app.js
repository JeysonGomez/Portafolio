import {Route, Brouser as Router, Routes } from 'react-router-dom'
import React from 'react'
import NavHeader from './components/NavHeader'

function app() {
  return (
    <div className=''>
        <Router>
            <navbar />
            <Routes>
                <Route path='./Inicio' element={<NavHeader/>}/>
                <Route path='./Proyectos' element={<NavHeader/>}/>
                <Route path='./components/SobreMi' element={<NavHeader/>}/>
                <Route path='./components/Contacto' element={<NavHeader/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default app