import React from 'react'
import propTypes from 'prop-types'

import './LanguagePicker.css'



function LanguagePicker({ setLanguage }) {
  const languages = [
    { code: "en", symbol: "U.S" },
    { code: "emoji", symbol: "😊" },
    { code: "fr", symbol: "F.R" }
  ]


  const languageIcons = languages.map(lang => 
    <span 
      data-test="language-icon"
      key={ lang.code }
      onClick={ () => setLanguage(lang.code) } >
        {lang.symbol}
      </span>
  )


  return (
    <div className="language-picker-component pl-3" data-test="component-language-picker">
      { languageIcons }
    </div>
  )

}

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired
}




export default LanguagePicker