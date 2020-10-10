import TestComponent from 'App';

const COMPONENT_NAME = '<App />'

describe('components', () => {
  describe(COMPONENT_NAME, () => {
    it('renders without crashing', () => {
      shallow(<TestComponent />)
    })
  })
})