import { useState } from 'react'
import Home from './Home.jsx'
import Aboutus from './Aboutus.jsx'
import Contacts from './Contacts.jsx'
import Members from './Members.jsx'
import Apartments from './Apartments.jsx'
import Apply from './Apply.jsx'
import {Routes, Route} from "react-router-dom"
import Nav from './Nav.jsx'

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutus" element={<Aboutus />}/>
      <Route path="/contacts" element={<Contacts />}/>
      <Route path="/members" element={<Members />}/>
      <Route path="/apartments" element={<Apartments />}/>
      <Route path="/apply" element={<Apply />}/>
    </Routes> 
  </>
  )
}

export default App
