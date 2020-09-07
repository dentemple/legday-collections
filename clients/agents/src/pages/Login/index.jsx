import React, { useEffect, useState } from 'react'
import { unwrapResult } from '@reduxjs/toolkit'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/* components */
import { UnauthLayout } from 'components/templates'
import { Button, Message } from 'components/atoms'
import LandingImage from './LandingImage'

/* state */
import { actions as appActions } from 'state/app'
import { actions as authActions } from 'state/auth'

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

  /* state hooks */
  const [state] = useState({ username: '', password: '' })

  /* effect hooks */
  useEffect(() => void dispatch(appActions.setIsAuthRoute(false)), [dispatch])

  /* render */
  return (
    <UnauthLayout>
      <LandingImage src={img} />
      <Message as="h1" id="login.pages.headings.title" fontSize="2rem" fontWeight="100" />
      <Button id="login.pages.buttons.primary" onClick={primarySubmit} />
    </UnauthLayout>
  )

  /* callbacks */
  async function primarySubmit() {
    try {
      const action = await dispatch(authActions.fetchLogin(state))
      await unwrapResult(action)

      history.push(routes.home)
    } catch (err) {
      console.warn(err)
    }
  }
}
