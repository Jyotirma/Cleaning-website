import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import IntroPage from './Pages/IntroPage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route index element={<IntroPage/>}></Route>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
