import { getLetterMatchCount } from './index'



describe('getLetterMatchCount', () => {
  let secretWord = 'party'
  
  test('returns the correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    
    expect(letterMatchCount).toBe(0)
  })
  test('returns the correct count when there are 3 matching letters', () => {
    const letterMatchcount = getLetterMatchCount('train', secretWord)

    expect(letterMatchcount).toBe(3)
  })
  test('returns the correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    
    expect(letterMatchCount).toBe(3)
  })
})