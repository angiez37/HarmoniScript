import React from 'react'
import Navbar from './components/navbar'
import Header from './components/Header'

const App = () => {
  return (
    <div className= "overflow-x-hidden antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(175,238,238,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Header />
    </div>
  )
}

export default App
