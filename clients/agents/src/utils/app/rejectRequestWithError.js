import { createIntl, createIntlCache } from 'react-intl'
import config, { locale, messages } from 'intl'

const cache = createIntlCache()

const intl = createIntl(
  {
    ...config,
    messages: messages[locale]
  },
  cache
)

export default function rejectRequestWithError({ rejectWithValue }) {
  return rejectWithValue({
    message: intl.formatMessage({ id: 'errors.global.fetch.message' }),
    name: intl.formatMessage({ id: 'errors.global.fetch.name' })
  })
}
