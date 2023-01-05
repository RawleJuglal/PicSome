import React, {useState} from 'react'
import './App.css'
import Header from '../Header/Header'
import 'remixicon/fonts/remixicon.css'
import {NavLink, Routes, Route} from 'react-router-dom'
import Cart from '../Pages/Cart/Cart'
import Photos from '../Pages/Photos/Photos'


function App() {

  return (
    <div className="--app-app-container">
      <nav>
        <Header />
      </nav>
      <main>
        <Routes>
          <Route index element={<Photos />}></Route>
          <Route path='cart' element={<Cart />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
