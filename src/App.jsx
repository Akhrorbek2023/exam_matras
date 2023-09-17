import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'

import Full from './components/Full'
import Admin from './components/admin/Admin'
import Orders from './components/admin/register/Orders'
import Costumers from './components/admin/register/Costumers'
import Typies from './components/admin/register/Typies'
import Products from './components/admin/register/Products'
import Technologies from './components/admin/register/Technologies'
import Location from './components/admin/register/Location'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   
   <Routes>
   <Route path='/' element={<Full/>}/>
   <Route path='/admin' element={<Admin/>}>
        <Route path="/admin/orders" element={<Orders/>} />
        <Route path="/admin/costumers" element={<Costumers/>} />
        <Route path="/admin/typies" element={<Typies/>} />
        <Route path="/admin/products" element={<Products/>} />
        <Route path="/admin/technology" element={<Technologies/>} />
        <Route path="/admin/location" element={<Location/>} />
   </Route>
   </Routes>
    </>
  )
}

export default App
