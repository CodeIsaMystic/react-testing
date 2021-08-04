import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { guessWord } from '../actions'



const Input = ({ secretWord }) => {
  const [ currentGuess, setCurrentGuess ] = React.useState("")
  const dispatch = useDispatch()
  const success = useSelector(state => state.success)

  if(success) {
    return <div data-test="component-input" />

  }

  return (
    <div className="mt-3" data-test="component-input">
      <form className="form-inline">
        <input 
          type="text" 
          data-test="input-box" 
          className="mb-2 mx-sm-3" 
          placeholder="enter guess"
          value={currentGuess} 
          onChange={event => setCurrentGuess(event.target.value)}
        />

        <button 
          data-test="submit-button" 
          onClick={
            (event) => { 
              event.preventDefault() 
              dispatch(guessWord(currentGuess))
              setCurrentGuess('')
            }
          }
          className="btn px-2 py-0 mb-2">
          Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}


export default Input