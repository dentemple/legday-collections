import { metadata } from 'utils/app'

export { default as messages } from './messages'

console.log('local:', {
  useTestIntl: metadata.useTestIntl,
  check: metadata.useTestIntl,
  result:
    metadata.useTestIntl ||
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en-US'
})

export const locale =
  metadata.useTestIntl ||
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  'en-US'

const config = {
  defaultLocale: 'en-US',
  key: locale,
  locale
}

export default config
