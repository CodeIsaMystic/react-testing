/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word.
 * @param {string} secretWord  - Secret Word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
/*   eslint-disable  */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split('')
  const guessedLetterSet = new Set(guessedWord)

  return secretLetters.filter(letter => guessedLetterSet.has(letter)).length
}