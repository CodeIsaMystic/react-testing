import React from 'react'
import { mount } from 'enzyme'

import { findByTestAttribute, checkProps } from '../../../test/testUtils'

import Input from './Input'
import languageContext from '../../contexts/languageContext'
import successContext from '../../contexts/successContext'
import guessedWordsContext from '../../contexts/guessedWordsContext'



/**
 * Factory function to create a React Wrapper for the Input component.
 * Test Context Method 1 - wrapping the component in the Provider in setup and passing the value along that way using mount
 * @function setup
 * @param {object} testValues - Context values specific to this setup
 * @returns {ReactWrapper}
 */
const setup = ({ success, language, secretWord }) => {
  language = language || 'en'
  success = success || false
  secretWord = secretWord || 'party'

  return mount(
    <languageContext.Provider value={ language }>
      <successContext.SuccessProvider value={[success, jest.fn()]} >
        <guessedWordsContext.GuessedWordsProvider>
          <Input secretWord={ secretWord } />
        </guessedWordsContext.GuessedWordsProvider>
      </successContext.SuccessProvider>
    </languageContext.Provider>
  )
}



describe('render', () => {
  describe('success is true', () => {
    let wrapper

    beforeEach(() => {  wrapper = setup({success: true})  })


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

    beforeEach(() => { wrapper = setup({success: false}) })

    
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
  checkProps(Input, { secretWord: "party" })
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

    wrapper = setup({})
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

describe('language Picker', () => {
  test('correctly renders input strings in english', () => {
    const wrapper = setup({ language: 'en'})
    const submitButton = findByTestAttribute(wrapper, 'submit-button')

    expect(submitButton.text()).toBe('Submit')
  })
  test('correctly renders input strings in emoji', () => {
    const wrapper = setup({ language: 'emoji'})
    const submitButton = findByTestAttribute(wrapper, 'submit-button')

    expect(submitButton.text()).toBe('🚀')
  })
})