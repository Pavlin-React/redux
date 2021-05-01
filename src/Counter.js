import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'




const Counter = () => {

  let count = useSelector( ( state ) => state.counter.count )
  let dispatch = useDispatch()

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
