import React from 'react'
import PropTypes from 'prop-types'




const Input = ({ success, secretWord }) => {
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
              setCurrentGuess('')
            }
          }
          className="btn btn-primary mb-2">
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