const languageStrings = {
  en: {
   congrats: 'Congratulations! You guessed the word!',
   submit: 'Submit',
   guessPrompt: 'Try to guess the secret word!',
   guessInputPlaceholder: 'enter guess',
   guessColumnHeader: 'Guessed Words',
   guessedWords: 'Guesses',
   matchingLettersColumnHeader: 'Matching Letters',
  },
  fr: {
    congrats: 'Félicitations! Tu as deviné le mot!',
    submit: 'Soumettre',
    guessPrompt: 'Essayes de deviner le mot',
    guessInputPlaceholder: 'Tentes ta chance!',
    guessColumnHeader: 'Mots utilisés',
    guessedWords: 'Mots',
    matchingLettersColumnHeader: 'Nombre de lettres présentes',
   },
  emoji: {
   congrats: '🎯🎉',
   submit: '🚀',
   guessPrompt: '🤔🤫🔤',
   guessInputPlaceholder: '⌨️🤔',
   guessedWords: '🤷‍🔤',
   guessColumnHeader: '🤷‍',
   matchingLettersColumnHeader: '✅',
  }
}


function getStringByLanguage(languageCode, stringKey, strings=languageStrings) {

  if(!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`)

    // fall back to english
    return strings.en[stringKey]
  }
  return strings[languageCode][stringKey]

}

const stringsModule = { getStringByLanguage }

// for future mocking
export default stringsModule