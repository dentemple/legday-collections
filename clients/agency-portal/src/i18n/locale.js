import { getEnv } from 'utils/app'

export const defaultLocale = 'en-US'

export const locale =
  getEnv({ key: 'REACT_APP_TEST_LOCALE' }) ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  defaultLocale
