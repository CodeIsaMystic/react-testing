import { mount } from 'enzyme'
import { Provider } from 'react-redux';

import App from './App';

import { findByTestAttribute, storeFactory } from '../../test/testUtils'


// activate global mock to make sure getSecretWord does not make network call
jest.mock('../actions')
/* eslint-disable */
import { getSecretWord as mockGetSecretWord } from '../actions'

/**
 * Setup function for App Component
 * @returns {Provider}
 */
const setup = () => {
  const store = storeFactory()
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(
    <Provider store={store} >
      <App />
    </Provider>
  )
}


test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttribute(wrapper, 'component-app')

  expect(appComponent).toHaveLength(1)
})

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
