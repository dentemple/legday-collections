import React from 'react'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/* components */
import { Button, Message } from 'components/atoms'
import LandingImage from './LandingImage'
import LoginPageContainer from './LoginPageContainer'

/* state */
import { actions as userActions } from 'state/user'

/* utils */
import img from 'assets/img/landing.svg'
import { routes } from 'utils/constants'

/**
 * Home component
 */
export default function Home() {
  /* library hooks */
  const dispatch = useDispatch()
  const history = useHistory()

  /* render */
  return (
    <LoginPageContainer>
      <LandingImage src={img} />
      <Message as="h1" id="home.pages.headings.title" fontSize="2rem" fontWeight="100" />
      <Button id="home.pages.buttons.primary" onClick={primaryActions} />
    </LoginPageContainer>
  )

  /* callbacks */
  async function primaryActions() {
    try {
      const action = await dispatch(userActions.fetchUserLogin())
      await unwrapResult(action)

      history.push(routes.home)
    } catch (_) {}
  }
}
