import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import Activities from './Pages/Activities/Activities'
import FAQs from './Pages/FAQs/FAQs'

import Home from './Pages/Home'
import Tickets from './Pages/Tickets/Tickets'
import Feature from './Pages/Vendor/Feature/Feature'
import Vendor from './Pages/Vendor/Vendor'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ticket' element={<Tickets/>}/>
        <Route path='/vendors' element={<Vendor/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/Featuring' element={<Feature/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App