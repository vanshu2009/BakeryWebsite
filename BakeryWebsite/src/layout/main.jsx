import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import "../App.css"
const main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}

export default main

