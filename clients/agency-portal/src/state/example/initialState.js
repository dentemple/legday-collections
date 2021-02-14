import { intl } from 'i18n'

export const initialState = {
  count: 0,
  text: intl.formatMessage({ id: 'state.example.initialState.text' })
}

export default initialState
