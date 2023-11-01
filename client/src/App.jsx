import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import {Route, Routes} from "react-router-dom"
import Cardio from './Pages/Cardio'
import Everyday from './Pages/Everyday'
import Five from './Pages/Five'
import Four from './Pages/Four'
import Manual from './Pages/Manual'
import Progress from './Pages/Progress'
import NavBar from './Components/NavBar'



function App() {
  

  return (
    <>
   <NavBar/>
     <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/cardio" element= {<Cardio/>}/>
      <Route path="/everyday" element= {<Everyday/>}/>
      <Route path="/five" element= {<Five/>}/>
      <Route path="/four" element= {<Four/>}/>
      <Route path="/manual" element= {<Manual/>}/>
      <Route path="/progress" element= {<Progress/>}/>
     </Routes>
    </>
  )
}


export default App
