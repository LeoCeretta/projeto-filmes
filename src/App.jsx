/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Serie from './pages/Serie'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
