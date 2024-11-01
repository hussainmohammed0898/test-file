import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Content from '../components/Content'

function Layout() {
    
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='content' element={<Content/>}/>

        </Routes>
    </Router>
    
  )
}

export default Layout