import React from 'react'
import { useSelector } from 'react-redux'

/* components */
import { GlobalStyle } from 'theme'
import Routes from './Routes'

/* state */
import { selectors as userSelectors } from 'state/user'

/**
 * App
 */
export default function App() {
  const isAuth = useSelector(userSelectors.selectIsAuth)

  return (
    <>
      <GlobalStyle isAuth={isAuth} />
      <Routes isAuth={isAuth} />
    </>
  )
}
