import { createIntl, createIntlCache } from 'react-intl'

import messagesList from './messages'

import { getEnvironmentVariable } from 'utils/app'

const cache = createIntlCache()

export const defaultLocale = 'en-US'

export const locale =
  getEnvironmentVariable('REACT_APP_LANGUAGE_TEST') ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  'en-US'

export const messages = messagesList[locale]

export const config = {
  defaultLocale,
  key: locale,
  locale,
  messages
}

/**
 * For use in internationalization outside of React components
 */
export const intl = createIntl(config, cache)

const main = { config, defaultLocale, locale, messages }

export default main
