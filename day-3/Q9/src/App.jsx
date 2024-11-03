import React from 'react'
import Sidebar from './components/Sidebar'
import CoffeeList from './components/CoffeeList'
import './App.css';
const App = () => {
  return (
    <div className='app-container'>
      <Sidebar/>
      <CoffeeList/>
    </div>
  )
}

export default App