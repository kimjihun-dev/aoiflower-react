import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'

function App() {

  return (
    <div className="app">
      <Header />
      <HeroSlider />
    </div>
  )
}

export default App
