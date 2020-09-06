export { default as messages } from './messages'

export const locale = // 'en-UD'
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage || 'en-US'

export default {
  defaultLocale: 'en-US',
  key: locale,
  locale
}
