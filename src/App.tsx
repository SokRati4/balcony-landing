import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Advantages from './components/Advantages'
import Menu from './components/Menu'
import Process from './components/Process'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brandSecondary">
      <Header />
      <Hero />
      <Advantages />
      <Menu />
      <Process />
      <Contacts />
      <Footer />
      
    </div>
  )
}

export default App
