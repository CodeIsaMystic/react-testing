import React from 'react'
import PropTypes from 'prop-types'

import guessedWordsContext from '../../contexts/guessedWordsContext'
import successContext from '../../contexts/successContext'
import languageContext from '../../contexts/languageContext'

import stringsModule from '../../helpers/stringsModule'
import { getLetterMatchCount } from '../../helpers'





const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext)
  const [success, setSuccess] = successContext.useSuccess()
  const [guessedWords, setGuessedWords] = guessedWordsContext.useGuessedWords()
  const [ currentGuess, setCurrentGuess ] = React.useState("")

  if(success) {
    return <div data-test="component-input" />

  }

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input 
          type="text" 
          data-test="input-box" 
          className="my-2 mx-sm-2 p-2 rounded" 
          placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
          value={currentGuess} 
          onChange={event => setCurrentGuess(event.target.value)}
        />

        <button 
          data-test="submit-button" 
          onClick={
            (event) => { 
              event.preventDefault() 
              const letterMatchCount = getLetterMatchCount(currentGuess, secretWord)
              const newGuessedWords = [
                ...guessedWords, 
                { guessedWord: currentGuess, letterMatchCount }
              ]

              setGuessedWords(newGuessedWords)

              if(currentGuess === secretWord) setSuccess(true)

              setCurrentGuess('')
            }
          }
          className="btn btn-light my-2 p-2">
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}


export default Input