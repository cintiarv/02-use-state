import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ExerciseComponent = ({ actualYear }) => {
  const [yearNow, setYearNow] = useState(actualYear)

  const handleLast = e => {
    setYearNow(yearNow - 1)
  }
  const handleNext = e => {
    setYearNow(yearNow + 1)
    console.log(setYearNow)
  }

  const changeYear = e => {
    const data = parseInt(e.target.value)
    if (Number.isInteger(data)) {
      setYearNow(data)
    } else {
      setYearNow(actualYear)
    }
  }

  return (
    <div>
      <h2>Events and use State</h2>
      <strong>{yearNow}</strong>
      <div>
        <button onClick={handleLast}>Last year</button>
      &nbsp;
        <button onClick={handleNext}>Next year</button>
      </div>
      <p>Change year: </p>
      <input type='text' onChange={changeYear} placeholder='change year' />

    </div>
  )
}

ExerciseComponent.propTypes = {
  actualYear: PropTypes.number.isRequired
}
