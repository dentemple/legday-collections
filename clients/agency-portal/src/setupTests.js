/* polyfills */
import 'whatwg-fetch'

/* configurations */
import { configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import fetchMocks from 'jest-fetch-mock'
import IntlPolyfill from 'intl'

/* additional features */
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

/* configure libraries */
configure({ adapter: new Adapter() })
fetchMocks.enableMocks()

if (global.Intl) {
  Intl.NumberFormat = IntlPolyfill.NumberFormat
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
} else {
  global.Intl = IntlPolyfill
}

/* mocks */
jest.mock('./state/store', () => ({
  store: jest.fn(),
  useDispatch: () => jest.fn()
}))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

const mockExampleAsyncAction = {
  pending: {},
  fulfilled: {},
  rejected: {}
}
