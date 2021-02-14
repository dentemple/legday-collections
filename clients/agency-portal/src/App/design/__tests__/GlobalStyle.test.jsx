import { render, screen } from '@testing-library/react'

import TestComponent from '../GlobalStyle'
import { wrapper } from 'utils/mocks'

const categoryName = 'app'
const componentName = 'GlobalStyle'

describe(categoryName, () => {
  describe(componentName, () => {
    it('renders without crashing', () => {
      render(wrapper(<TestComponent />, {}))
    })
  })
})
