import { createIntl, createIntlCache } from 'react-intl'
import config from './config'

const cache = createIntlCache()

/**
 * Provides internationalization outside of React's component lifecycle
 */
export const intl = createIntl(config, cache)

export default intl
