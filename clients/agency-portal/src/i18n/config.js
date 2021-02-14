import { defaultLocale, locale } from './locale'
import messages from './messages'

export const config = {
  defaultLocale,
  key: locale,
  locale,
  messages: messages[locale]
}

export default config
