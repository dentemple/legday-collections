import { createIntl, createIntlCache } from 'react-intl'
import config, { locale, messages } from 'utils/intl'

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
    message: intl.formatMessage({ id: 'global.errors.requests.message' }),
    name: intl.formatMessage({ id: 'global.errors.requests.name' })
  })
}
