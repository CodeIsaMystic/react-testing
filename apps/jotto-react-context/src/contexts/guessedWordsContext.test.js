import React from 'react'
import { shallow } from 'enzyme'

import { useGuessedWords, GuessedWordsProvider } from './guessedWordsContext'

/**
 * A functional component that calls useGuessedWords for our tests
 */
const FunctionalComponent = () => {
  useGuessedWords()

  return <div />
}



test('useGuessedWords throws an error when not wrapped in GuessedWordsProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />)
  }).toThrow('useGuessedWords must be wrapped within GuessedWordsProvider')
})

test('useGuessedWords not throws an error when wrapped in GuessedWordsProvider', () => {
  expect(() => {
    shallow(
      <GuessedWordsProvider>
        <FunctionalComponent />
      </GuessedWordsProvider>
    )
  }).not.toThrow()
})