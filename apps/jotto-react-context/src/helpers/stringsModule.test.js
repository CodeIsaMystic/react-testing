import stringsModule from './stringsModule'



const { getStringByLanguage } = stringsModule



const strings = {
  en: { submit: 'submit' },
  emoji: { submit: '🚀'},
  mermish: {}
}


describe('language string tests', () => {
  const mockWarn = jest.fn()
  let originalWarn

  beforeEach(() => {
    originalWarn = console.warn
    console.warn = mockWarn

  })

  afterEach(() => {
    console.warn = originalWarn

  })

  test('returns correct string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings)
  
    expect(string).toBe('submit')
    expect(mockWarn).not.toHaveBeenCalled()
  })
  
  test('returns correct string for emoji', () => {
    const string = getStringByLanguage('emoji', 'submit', strings)
    
    expect(string).toBe('🚀')
    expect(mockWarn).not.toHaveBeenCalled()
  })
  
  test('returns english submit string when language does not exists', () => {
    const string = getStringByLanguage('notALanguage', 'submit', strings)
    
    expect(string).toBe('submit')
    expect(mockWarn).toHaveBeenCalledWith("Could not get string [submit] for [notALanguage]")
  })
  
  test('returns english submit when submit key does not exists for language', () => {
    const string = getStringByLanguage('mermish', 'submit', strings)
    
    expect(string).toBe('submit')
    expect(mockWarn).toHaveBeenCalledWith("Could not get string [submit] for [mermish]")
  })

})
