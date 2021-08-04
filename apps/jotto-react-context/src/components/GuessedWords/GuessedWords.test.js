import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttribute } from '../../../test/testUtils'

import guessedWordsContext from '../../contexts/guessedWordsContext'
import GuessedWords from './GuessedWords'





/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * Test Context Method 2 - mocking using Shallow to access to embedded child states - using custom Hook, the mock returns value sets context value []
 * @function setup
 * @param {array} guessedWords - guessedWords value specific to this setup 
 * @returns {ShallowWrapper}
 */
const setup = (guessedWords=[]) => {
  const mockUseGuessedWords = jest.fn().mockReturnValue([guessedWords, jest.fn()])
  guessedWordsContext.useGuessedWords = mockUseGuessedWords

  return shallow(<GuessedWords />)
}






describe('if there are no words guessed', () => {
  let wrapper 

  beforeEach(() => { wrapper = setup([]) })

  test('renders without error', () => {
    const component = findByTestAttribute(wrapper, 'component-guessed-words')

    expect(component.length).toBe(1)
  })
  test('if there are words guessed', () => {
    const instructions = findByTestAttribute(wrapper, 'guess-instructions')

    expect(instructions.text().length).not.toBe(0)
  })
})


describe('if there are words guessed', () => {
  let wrapper
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ] 


  beforeEach(() => { wrapper = setup(guessedWords) })


  test('renders without error', () => {
    const component = findByTestAttribute(wrapper, 'component-guessed-words')

    expect(component.length).toBe(1)
  })
  test('renders GuessedWords section', () => {
    const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words')

    expect(guessedWordsNode.length).toBe(1)
  })
  test('renders the correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttribute(wrapper, 'guessed-word')

    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  })  
})


describe('languagePicker', () => {
  test('correctly renders guess instructions string in english by default', () => {
    const wrapper = setup([])
    const guessInstructions = findByTestAttribute(wrapper, "guess-instructions")

    expect(guessInstructions.text()).toBe('Try to guess the secret word!')
  })
  test('correctly renders guess instructions string in emoji', () => {
    const mockUseContext = jest.fn().mockReturnValue().mockReturnValue('emoji')
    React.useContext = mockUseContext

    const wrapper = setup([])
    const guessInstructions = findByTestAttribute(wrapper, "guess-instructions")



    expect(guessInstructions.text()).toBe('🤔🤫🔤')
  })
})