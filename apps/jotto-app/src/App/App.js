import React, { useEffect } from 'react'



import Congrats from '../Congrats/Congrats'
import GuessedWords from '../GuessedWords/GuessedWords'
import Input from '../Input/Input'
import { getSecretWord } from '../actions'



function App() {
  // TODO; get props from shared state
  const success = false
  const secretWord = 'party'
  const guessedWords = []



  useEffect(() => {
    getSecretWord()
  }, [])



  return (
    <div 
      data-test="component-app"
      className="container mt-5 text-center">
      <div className="row mt-5">
        <div className="col">
          <h1 className="my-5">Jotto</h1>
          <Congrats success={success} />
          <Input success={success} secretWord={secretWord} />
          <GuessedWords guessedWords={guessedWords} />
        </div>
      </div>
    </div>
  );
}

export default App;