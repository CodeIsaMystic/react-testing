import React from 'react'
import { mount } from 'enzyme'

import { findByTestAttribute } from '../../test/testUtils'

import App from './App'




/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function setup
 * 
 * @param {object} state - Initial conditions.
 * @returns {Wrapper} - Enzyme wrapper of mounted App Component
 */
const setup = (state = {}) => {
  // TODO:  apply the state
  const wrapper = mount(<App />)


  // add a value to input box
  const inputBox = findByTestAttribute(wrapper, 'input-box')
  inputBox.simulate('change', { target: { value: 'train' }})


  //simulate a click on submit btn
  const submitButton = findByTestAttribute(wrapper, 'submit-button')
  submitButton.simulate('click', { preventDefault() {} })

  return wrapper
}




describe.skip('no words guessed', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    })
  })

  test('creates a GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttribute(wrapper, 'guessed-word')

    expect(guessedWordRows).toHaveLength(1)
  })
})


describe.skip('some words guessed', () => {
  let wrapper

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'agile',
          letterMatchCount: 1
        }
      ]
    })
  })


  test('adds row to guessedWords table', () => {
    const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word')

    expect(guessedWordNodes).toHaveLength(2)
  })
})





describe.skip('guess the secret word', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{
        guessedWord: 'agile',
        letterMatchCount: 1
        }]
      })
      
      // add value to input box
      const inputBox = findByTestAttribute(wrapper, 'input-box')
      const mockEvent = { target: { value: 'party' }}
      inputBox.simulate('change', mockEvent)
      
      //  simulate click on submit button
      const submitButton = findByTestAttribute(wrapper, 'submit-button')
      submitButton.simulate('click', { preventDefault() {} })
    })

    test('adds row to guessedWords table', () => {
      const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word')

      expect(guessedWordNodes).toHaveLength(3)
    })
    test('display congrats component', () => {
      const congrats = findByTestAttribute(wrapper, 'component-congrats')

      expect(congrats.text().length).toBeGreaterThan(0)
    })
    test('does not display input component contents', () => {
      const inputBox = findByTestAttribute(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false)

      const submitButton = findByTestAttribute(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(false)
    })
  
})