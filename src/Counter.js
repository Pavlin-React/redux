import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './redux/ducks/counter'




const Counter = ( props ) => {
  let { name } = props

  let dispatch = useDispatch()

  let handleIncrement = () => {
    dispatch( increment() )
  }

  let handleDecrement = () => {
    dispatch( decrement() )
  }

  return (
    <div style={ { backgroundColor: 'grey', margin: '10px' } } >
      <h3>Count: </h3>
      <div style={ { display: 'flex', justifyContent: 'center' } } >
        <p>{ name }</p>
        <button onClick={ handleIncrement }>Increment</button>
        <button onClick={ handleDecrement }>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
