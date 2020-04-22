import React from 'react'
import {render,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestDOMElements from '.'

describe('Testing DOM Elements',()=>{
    describe('When Component renders',()=>{
        it('should display 0 as initial number',()=>{
            const {getByTestId} = render(<TestDOMElements />)
            expect(getByTestId('number')).toHaveTextContent(0)
        })
        it('should increment the number when Increment button is clicked',()=>{
            const {getByTestId} = render(<TestDOMElements />)
            fireEvent.click(getByTestId('increment-button'))
            expect(getByTestId('number')).toHaveTextContent(1)
        })
        it('should take a snapshot', () => {
            const { asFragment } = render(<TestDOMElements />)
            
            expect(asFragment(<TestDOMElements />)).toMatchSnapshot()
        })
        
    })

   
})