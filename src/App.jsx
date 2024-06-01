
import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/heroSection'
import FeatureSection from './components/featureSection'
import Workflow from './components/Workflow'


function App() {
  return (
    <div>
      <Navbar /> 
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      </div>
    </div>
  )
}

export default App
