import React, { useEffect } from 'react'


import Congrats from '../components/Congrats/Congrats'
import GuessedWords from '../components/GuessedWords/GuessedWords'
import Input from '../components/Input/Input'
import LanguagePicker from '../components/LanguagePicker/LanguagePicker'

import { getSecretWord } from '../actions'

import languageContext from '../contexts/languageContext'
import successContext from '../contexts/successContext'
import guessedWordsContext from '../contexts/guessedWordsContext'

import './App.css'


const SET_SECRET_WORD = 'setSecretWord'
const SET_LANGUAGE = 'setLanguage'



/* Reducer example:
 { type: setSecretWord, payload: 'party }
*/
/**
 * @function reducer to update state automatically called by dispatch
 * @param {object} state - previous state 
 * @param {object} action - `type` and `payload` properties
 * @return {object} - new state
 */
const reducer = (state, action) => {
  switch(action.type) {
    case SET_SECRET_WORD:
      return { ...state, secretWord: action.payload  }
    case SET_LANGUAGE:
      return { ...state, language: action.payload }
    default:
      throw new Error(`Invalid action type: ${action.type}`)
  }
}



function App() {
  const [ state, dispatch ] = React.useReducer(
    reducer, 
    { secretWord: null, language: 'en' }
  )

  const setSecretWord = (secretWord) => {
    dispatch({ type: SET_SECRET_WORD, payload: secretWord })
  }
  const setLanguage = (language) => {
    dispatch({ type: SET_LANGUAGE , payload: language })
  }



  useEffect(() => {
    getSecretWord(setSecretWord)
  }, [])


  if(state.secretWord === null)  {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading secret word...</p>
      </div>
    )
  }


  return (
    <div 
      data-test="component-app"
      className="p-5">
      <div className="app-component row">
        <div className="col">
          <p>The secret word is " {state.secretWord} "</p>
          <h1 className="display-3 pl-3">Jotto</h1>
          <languageContext.Provider value={state.language} >
            <LanguagePicker setLanguage={ setLanguage } />
            <guessedWordsContext.GuessedWordsProvider>
              <successContext.SuccessProvider>
                <Congrats />
                <Input secretWord={state.secretWord} />
              </successContext.SuccessProvider>
              <GuessedWords />
            </guessedWordsContext.GuessedWordsProvider>
          </languageContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;