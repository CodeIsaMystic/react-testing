import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import { findByTestAttribute, checkProps, storeFactory } from '../../test/testUtils'

import Input from './Input'


/**
 * Factory function to mount the Input component wrapped in a Provider.
 * @function setup
 * @returns {}
 */
const setup = ( initialState={}, secretWord='party') => {
  const store = storeFactory(initialState)
  return mount(
    <Provider store={store} >
      <Input secretWord={secretWord} />
    </Provider>
  )
}



describe('render', () => {
  describe('success is true', () => {
    let wrapper

    beforeEach(() => {  wrapper = setup({ success: true })  })


    test('renders Input component without error', () => {
      const component = findByTestAttribute(wrapper, 'component-input')
    
      expect(component.length).toBe(1)
    })
    test('input box does not show', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box')

      expect(inputBox.exists()).toBe(false)
    })
    test('submit button does not show', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button')

      expect(submitButton.exists()).toBe(false)
    })



  })

  describe('success is false', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup({ success: false })
    })


    
    test('renders Input component without error', () => {
      const component = findByTestAttribute(wrapper, 'component-input')
    
      expect(component.length).toBe(1)
    })
    test('input box shows', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box')

      expect(inputBox.exists()).toBe(true)
    })
    test('submit button shows', () => {
      const submitButton = findByTestAttribute(wrapper, 'submit-button')

      expect(submitButton.exists()).toBe(true)
    })

  })
})






test('does not throw warning with expected prop', () => {
  checkProps(Input, { secretWord: "hello" })
})


describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn()
  let wrapper
  let originalUseState
  
  /* eslint-disable */
  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    originalUseState = React.useState
    
    React.useState = jest.fn(() => {
      return ['', mockSetCurrentGuess]
    })

    wrapper = setup({ success: false })
  })
  afterEach(() => {
    React.useState = originalUseState
  })

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttribute(wrapper, 'input-box')
    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate('change', mockEvent)
    
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttribute(wrapper, 'submit-button')
    submitButton.simulate('click', { preventDefault() {} })

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
  })
})