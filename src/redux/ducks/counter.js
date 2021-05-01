let INCREMENT = 'increment'
let DECREMENT = 'decrement'

export let increment = () => ( {
  type: INCREMENT
} )

export let decrement = () => ( {
  type: 'DECREMENT'
} )

let initialState = {
  count: 0
}

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case DECREMENT:
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}