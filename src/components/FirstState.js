import React, { useState } from 'react'

export const FirstState = () => {
  const [name, setName] = useState('cin')

  const changeName = (e, uniqueName) => {
    setName(uniqueName)
    console.log(e.target)
  }

  return (
    <div>
      <h3>My first state </h3>
        &nbsp;
      <strong>{name}</strong>
      <br />
      <button onClick={e => changeName(e, 'cintilu')}>Change</button>
        &nbsp;
      <input type='text' onKeyDown={e => changeName(e, e.target.value)} placeholder='change the name' />
    </div>
  )
}
