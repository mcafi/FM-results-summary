import React from 'react'

import TotalScore from './TotalScore'

export default function Result() {
  return (
    <div className="result-container">
        <h1 className='title'>Your Result</h1>
        <TotalScore/>
        <h2>Great</h2>
        <div className="recap">
            You scored higher than 65% of the people who have taken the tests.
        </div>
    </div>
  )
}
