import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



import Congrats from '../Congrats/Congrats'
import GuessedWords from '../GuessedWords/GuessedWords'
import Input from '../Input/Input'
import { getSecretWord } from '../actions'



function App() {
  const success = useSelector(state => state.success)
  const guessedWords = useSelector(state => state.guessedWords)
  const secretWord = useSelector(state => state.secretWord)

  const dispatch = useDispatch()
  


  useEffect(() => {
    dispatch(getSecretWord())
  }, [])



  return (
    <div 
      data-test="component-app"
      className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <h1 className="ml-2 my-5">Jotto</h1>
          <div className="ml-2" >The secret word is " {secretWord} ". </div>
          <Congrats success={success} />
          <Input secretWord={secretWord} />
          <GuessedWords guessedWords={guessedWords} />
        </div>
      </div>
    </div>
  );
}

export default App;