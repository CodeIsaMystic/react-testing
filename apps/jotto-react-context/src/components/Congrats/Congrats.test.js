import { mount } from 'enzyme'

import { findByTestAttribute } from '../../../test/testUtils'

import Congrats from './Congrats'
import languageContext from '../../contexts/languageContext'
import successContext from '../../contexts/successContext'





/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * Test Context Method 1 - wrapping the component in the Provider in setup passing the value along that way using mount
 * @function setup
 * @param {object} testValues - Context values specific to this setup 
 * @returns {ShallowWrapper}
 */
const setup = ({ success, language }) => {
  language = language || 'en'
  success = success || false
  
  return mount(
    <languageContext.Provider value={ language } >
      <successContext.SuccessProvider value={[success, jest.fn()]}  >
      <Congrats />
      </successContext.SuccessProvider>
    </languageContext.Provider>
  )
}




describe('languagePicker', () => {
  test('correctly renders congrats string in english', () => {
    const wrapper = setup({ success: true })

    expect(wrapper.text()).toBe("Congratulations! You guessed the word!")
  })
  test('correctly renders congrats string in emoji', () => {
    const wrapper = setup({ success: true, language: 'emoji' })

    expect(wrapper.text()).toBe('🎯🎉')
  })
})





test('renders without error', () => {
  const wrapper = setup({}) 
  const component = findByTestAttribute(wrapper, 'component-congrats')

  expect(component.length).toBe(1)
})
test('renders no text when `success` is false', () => {
  const wrapper = setup({ success: false }) 
  const component = findByTestAttribute(wrapper, 'component-congrats')

  expect(component.text()).toBe('')
})
test('renders non-empty congrats message when `success` is true', () => {
  const wrapper = setup({ success: true }) 
  const message = findByTestAttribute(wrapper, 'congrats-message')

  expect(message.text().length).not.toBe(0)
})
