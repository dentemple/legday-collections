import { fireEvent, render, screen } from '@testing-library/react'

import TestComponent from './index'
import { createState, wrapper, shortText } from 'utils/mocks'

/* state */
import { useSelector } from 'react-redux'
import { initialState } from 'state/example'

const categoryName = 'pages'
const componentName = 'Example'

describe(categoryName, () => {
  describe(componentName, () => {
    const state = {
      ...initialState,
      text: shortText
    }

    beforeEach(() => {
      useSelector.mockImplementation(createState('example', state))
    })

    afterEach(() => {
      useSelector.mockClear()
    })

    it('renders without crashing', () => {
      render(wrapper(<TestComponent />, {}))
    })

    it('renders the expected elements', () => {
      render(wrapper(<TestComponent />, {}))

      expect(screen.getByText(shortText)).toBeInTheDocument()
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })
  })
})
