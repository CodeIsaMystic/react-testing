import React from 'react'
import { mount } from 'enzyme'
import { findByTestAttribute } from '../../test/testUtils'

import App from './App';


// Activate global mock to make sure getSecretWord does not make network call
jest.mock('../actions')
/* eslint-disable */
import { getSecretWord as mockGetSecretWord } from '../actions'

/**
 * Setup function for App Component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />)
}


describe.each([
  [null, true, false],
  ['party', false, true]
])(
  'renders with secretWord as %s', (secretWord, loadingShows, appShows) => {
    let wrapper
    let originalUseReducer
    
    beforeEach(() => {
      originalUseReducer = React.useReducer

      const mockUseReducer = jest.fn()
        .mockReturnValue([{secretWord, language: 'en'}, jest.fn() ])

    React.useReducer = mockUseReducer
    wrapper = setup()
    })


    afterEach(() => {
      React.useReducer = originalUseReducer
    })
    test(`renders loading spinner: ${loadingShows}`, () => {
      const spinComponent = findByTestAttribute(wrapper, 'spinner')
      expect(spinComponent.exists()).toBe(loadingShows)
    })

    
    test(`renders app loaded: ${appShows}`, () => {
      const appComponent = findByTestAttribute(wrapper, 'component-app')
      expect(appComponent.exists()).toBe(appShows)
    })
  }
)



describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock from previous tests
    mockGetSecretWord.mockClear()
  })

  test('getSecretWord on app mount', () => {
    const wrapper = setup()

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup()
    mockGetSecretWord.mockClear()
    
    // using setProps because wrapper.update() does not trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps()

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
  })
})
