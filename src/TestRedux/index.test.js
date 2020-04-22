import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from './reducers'
import TestRedux from './index'

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

 afterEach(cleanup);

it('checks initial state is equal to 0', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />)
    expect(getByTestId('number')).toHaveTextContent('0')
  })
  it('increments the counter through redux', () => {
    const { getByTestId } = renderWithRedux(<TestRedux />, 
      {initialState: {number: 5}
  })
    fireEvent.click(getByTestId('increment-button'))
    expect(getByTestId('number')).toHaveTextContent('6')
  })
  
  it('decrements the counter through redux', () => {
    const { getByTestId} = renderWithRedux(<TestRedux />, {
      initialState: { number: 100 },
    })
    fireEvent.click(getByTestId('decrement-button'))
    expect(getByTestId('number')).toHaveTextContent('99')
  })
