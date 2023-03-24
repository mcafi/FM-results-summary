import { useState } from 'react'
import './App.css'
import TotalScore from './components/TotalScore'

function App() {

  return (
    <div className="App">
      <div className="result-container">
        <TotalScore/>
      </div>
      <div className="scores-container">
        Details
      </div>
    </div>
  )
}

export default App
