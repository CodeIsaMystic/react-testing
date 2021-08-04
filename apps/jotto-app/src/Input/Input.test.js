import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttribute, checkProps } from '../../test/testUtils'

import Input from './Input'


/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (success=false, secretWord="hello") => {
  return shallow(<Input success={success} secretWord={secretWord} />)
}



describe('render', () => {
  describe('success is true', () => {
    let wrapper

    beforeEach(() => {  wrapper = setup(true)  })


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
      wrapper = setup(false)
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

    wrapper = setup()
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