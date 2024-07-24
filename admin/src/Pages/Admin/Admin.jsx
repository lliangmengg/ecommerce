import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import {Routes , Route} from 'react-router-dom'
import Addproduct from '../../components/Addproduct/Addproduct.jsx'
import Listproduct from '../../components/Listproduct/Listproduct.jsx'

export default function Admin(){
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path = '/addproduct' element = {<Addproduct/>} />
        <Route path = '/allproducts' element = {<Listproduct/>} />
        <Route path = '/editproduct' element = {<Addproduct/>}/>
      </Routes>
    
    </div>
  )
}
