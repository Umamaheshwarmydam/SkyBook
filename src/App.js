import React from 'react'
import Main from './Main'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Flights from './Flight'

function App() {
  return (
  <BrowserRouter>
   <Routes>
     <Route path='/' element={<Main />}></Route>
     <Route path='/Flight' element={<Flights />}></Route>
     <Route path='/login' element={< Login />}></Route>
     <Route path='/signup' element={<Signup />}></Route>
   </Routes>
  </BrowserRouter>
  )
}

export default App
