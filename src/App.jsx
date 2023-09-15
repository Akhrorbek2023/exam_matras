import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Full from './components/Full'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Full/> 
   <Routes>
    <Route/>
   </Routes>
    </>
  )
}

export default App
