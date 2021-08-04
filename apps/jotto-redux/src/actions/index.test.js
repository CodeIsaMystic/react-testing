import moxios from 'moxios'

import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './index'


describe('getSecretWord function', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })



  test('secretWord is returned', () => {
    const store = storeFactory()
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'party'
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const secretWord = store.getState().secretWord
        expect(secretWord).toBe('party')
      })
  })
})