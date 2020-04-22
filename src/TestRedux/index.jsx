import React from 'react'
import { connect } from 'react-redux'

const TestRedux = ({number, dispatch}) => {

 const increment = () => dispatch({ type: 'INCREMENT' })
 const decrement = () => dispatch({ type: 'DECREMENT' })
  
 return (
  <>
    <h1 data-testid="number">{ number }</h1>
    <button data-testid="increment-button" onClick={increment}>Increment</button>
    <button data-testid="decrement-button" onClick={decrement}>Decrement</button>
 </>
    )
  }
  
export default connect(state => ({ number: state.number }))(TestRedux)
