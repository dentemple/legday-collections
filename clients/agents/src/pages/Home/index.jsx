import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* components */
import { MainLayout } from 'components/templates'
import { UserProfile } from 'components/organisms'

/* state */
import { actions as appActions } from 'state/app'
import { selectors as currSelectors } from 'state/currentUser'

export default function Home() {
  /* library hooks */
  const dispatch = useDispatch()

  /* selector hooks */
  const currentUser = useSelector(currSelectors.selectCurrentUser)

  /* effect hooks */
  useEffect(() => void dispatch(appActions.setIsAuthRoute(true)), [dispatch])

  return <MainLayout>{currentUser && <UserProfile {...currentUser} />}</MainLayout>
}
