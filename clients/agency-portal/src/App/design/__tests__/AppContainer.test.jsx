import { render, screen } from '@testing-library/react'

import TestComponent from '../AppContainer'
import { wrapper } from 'utils/mocks'

const categoryName = 'app'
const componentName = 'AppContainer'

describe(categoryName, () => {
  describe(componentName, () => {
    it('renders without crashing', () => {
      render(wrapper(<TestComponent />, {}))
    })
  })
})
