import persistState from 'redux-localstorage'

import { metadata } from 'utils/app'

const persistPath = undefined
const persistConfig = { key: `${metadata.appKey}-app` }

const enhancers = [persistState(persistPath, persistConfig)]

export default enhancers
