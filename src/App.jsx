//import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
