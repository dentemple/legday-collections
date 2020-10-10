import React, { StrictMode } from 'react'
import { useSelector } from 'react-redux'

/* components */
import { GlobalStyle } from 'theme'
import Routes from './Routes'

/* state */
import { selectors as appSelectors } from 'state/app'
import { selectors as authSelectors } from 'state/auth'

/**
 * App component
 */
export default function App() {
  const isAuth = useSelector(authSelectors.selectIsAuth)
  const isAuthRoute = useSelector(appSelectors.selectIsAuthRoute)

  return (
    <>
      <GlobalStyle isAuthRoute={isAuthRoute} />
      <StrictMode>
        <Routes isAuth={isAuth} />
      </StrictMode>
    </>
  )
}
