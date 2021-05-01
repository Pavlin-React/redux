import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './redux/ducks/counter'




const Counter = ( props ) => {
  let { name } = props

  let dispatch = useDispatch()
  let [votes, setVotes] = useState( 0 )

  let handleIncrement = () => {
    dispatch( increment() )
    setVotes( votes + 1 )
  }

  let handleDecrement = () => {
    dispatch( decrement() )
    setVotes( votes - 1 )
  }

  return (
    <div style={ { backgroundColor: 'grey', margin: '10px' } } >
      <h2>{ name }</h2>
      <h6>Votes: { votes }</h6>
      <div style={ { display: 'flex', justifyContent: 'center' } } >
        <p>{ name }</p>
        <button onClick={ handleIncrement }>Increment</button>
        <button onClick={ handleDecrement }>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
