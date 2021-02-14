import { render, screen } from '@testing-library/react'

import TestComponent from './index'
import { shortText, wrapper } from 'utils/mocks'

const categoryName = 'atoms'
const componentName = 'Box'

describe(categoryName, () => {
  describe(componentName, () => {
    it('renders without crashing', () => {
      render(wrapper(<TestComponent />, {}))
    })

    it('renders the expected children', () => {
      render(wrapper(<TestComponent>{shortText}</TestComponent>, {}))

      expect(screen.getByText(shortText)).toBeInTheDocument()
    })
  })
})
