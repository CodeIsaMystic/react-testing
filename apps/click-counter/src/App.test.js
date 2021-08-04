import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17' 

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })


/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)


const findByTestAttribute = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)


test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttribute(wrapper, "component-app")

  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const button = findByTestAttribute(wrapper, "increment-button")

  expect(button.length).toBe(1)

})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttribute(wrapper, "counter-display")

  expect(counterDisplay.length).toBe(1)

})

test('counter display starts at 0', () => {
  const wrapper = setup()
  const count = findByTestAttribute(wrapper, "count").text()
  
  expect(count).toBe("0")
})

test('clicking button increment the counter display', () => {
  const wrapper = setup()
  // find the button
  const button = findByTestAttribute(wrapper, "increment-button")
  
  // click the button
  button.simulate('click')

  // find the display
  // and test that the number has been incremented
  const count = findByTestAttribute(wrapper, "count").text()
  
  expect(count).toBe("1")
})