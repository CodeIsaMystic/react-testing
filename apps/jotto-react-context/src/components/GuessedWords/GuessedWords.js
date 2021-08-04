import React from 'react'

import guessedWordsContext from '../../contexts/guessedWordsContext'
import languageContext from '../../contexts/languageContext'
import stringsModule from '../../helpers/stringsModule'




const GuessedWords = () => {
  const [ guessedWords ] = guessedWordsContext.useGuessedWords() 

  const language = React.useContext(languageContext)
  let contents


  if(guessedWords.length === 0) {
    contents = (
      <span className="pl-3 mt-5" data-test="guess-instructions">
        {stringsModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    )
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))

    contents = (
      <div data-test="guessed-words" className="pl-3 mt-5">
        <h3>{stringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>{stringsModule.getStringByLanguage(language, 'guessColumnHeader')}</th>
              <th>{stringsModule.getStringByLanguage(language, 'matchingLettersColumnHeader')}</th>
            </tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div data-test="component-guessed-words">
      { contents }
    </div>
  )
}





export default GuessedWords