import { render, screen } from '@testing-library/react'

import TestComponent from './index'
import { wrapper } from 'utils/mocks'

const categoryName = 'pages'
const componentName = 'Page404'

describe(categoryName, () => {
  describe(componentName, () => {
    it('renders without crashing', () => {
      render(wrapper(<TestComponent />, {}))
    })
  })
})
