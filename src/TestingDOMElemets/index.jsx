import React from 'react'

const TestDOMElements = () => {
 const [number, setNumber] = React.useState(0)
  
 return (
  <>
    <h1 data-testid="number">{ number }</h1>
    <button data-testid="increment-button" onClick={() => setNumber(number + 1)}> Increment</button>
    <button data-testid="decrement-button" onClick={() => setNumber(number - 1)}>Decrement</button>
 </>
    )
  }
  
export default TestDOMElements