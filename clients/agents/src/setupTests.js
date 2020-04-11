import React from 'react'
import 'react-app-polyfill/stable'

import { configure, mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'

import { useSelector, useDispatch } from 'react-redux'
import fetchMocks from 'jest-fetch-mock'
import configureMockStore from 'redux-mock-store'

import middlewares from 'state/store/middlewares'

// configurations
configure({ adapter: new Adapter() })
const mockStore = configureMockStore(middlewares)

// mocks
fetchMocks.enableMocks()

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}))

// globals
global.React = React
global.mockStore = mockStore
global.mount = mount
global.render = render
global.shallow = shallow
