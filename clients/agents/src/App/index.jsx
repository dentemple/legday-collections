import React from 'react'
import { useSelector } from 'react-redux'

/* components */
import { GlobalStyle } from 'theme'
import Routes from './Routes'

/* state */
import { selectors as appSelectors } from 'state/app'
import { selectors as userSelectors } from 'state/user'

/**
 * App component
 */
export default function App() {
  const isAuth = useSelector(userSelectors.selectIsAuth)
  const isAuthRoute = useSelector(appSelectors.selectIsAuthRoute)

  return (
    <>
      <GlobalStyle isAuthRoute={isAuthRoute} />
      <Routes isAuth={isAuth} />
    </>
  )
}
