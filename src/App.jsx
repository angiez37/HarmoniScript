import React from 'react'
import Header from './components/Header'
import Explore from './components/Explore'
import Upload from './components/Upload'
import Info from './components/Info'

const App = () => {
  return (
    <div className= "overflow-x-hidden antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(175,238,238,0.3),rgba(255,255,255,0))]"></div>
      <Info />
      <Header />
      <Explore />
      <Upload />
    </div>
  )
}

export default App
