import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/* components */
import { MainLayout } from 'components/templates'

/* state */
import { actions as appActions } from 'state/app'

export default function Home() {
  /* library hooks */
  const dispatch = useDispatch()

  /* effect hooks */
  useEffect(() => void dispatch(appActions.setIsAuthRoute(true)), [dispatch])

  return <MainLayout>Home</MainLayout>
}
