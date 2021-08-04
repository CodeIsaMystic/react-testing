import React from 'react'

import languageContext from '../../contexts/languageContext'
import successContext from '../../contexts/successContext'

import stringsModule from '../../helpers/stringsModule'


/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX Element} - Rendered Component(or null if `success` is false).
 */
const Congrats = () => {
  const [success] = successContext.useSuccess()
  const language = React.useContext(languageContext)

  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-warning text-dark my-4 pl-3">
        <span  data-test="congrats-message">
          {stringsModule.getStringByLanguage(language, 'congrats')}
        </span>
      </div>
    )
  } else {
    return ( 
      <div data-test="component-congrats" />
    )
  }
}


export default Congrats