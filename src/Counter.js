import React, { useState } from 'react'
import { useSelector } from 'react-redux'




const Counter = () => {

  let count = useSelector( ( state ) => state.counter.count )

  let increment = () => {}

  let decrement = () => {}

  return (
    <div style={ { backgroundColor: 'grey', margin: '10px' } } >
      <h3>Count: { count }</h3>
      <div style={ { display: 'flex', justifyContent: 'center' } } >
        <button onClick={ increment }>Increment</button>
        <button onClick={ decrement }>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
