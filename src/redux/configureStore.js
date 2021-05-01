import { combineReducers, createStore } from 'redux'
import counterReducer from './ducks/counter'

let reducer = combineReducers( {
  counter: counterReducer
} )

let store = createStore( reducer )

export default store