import { render, screen } from '@testing-library/react'

import TestComponent from '../index'
import { wrapper } from 'utils/mocks'

const categoryName = 'app'
const componentName = 'Routes'

describe(categoryName, () => {
  describe(componentName, () => {
    it('renders without crashing', () => {
      render(wrapper(<TestComponent />, {}))
    })
  })
})
