import React from 'react'

/* components */

/* state */
import { propTypes as usersPropTypes } from 'state/users'

/**
 * UserProfile component
 */
export default function UserProfile({ createdAt, displayName, profileUrl }) {
  return (
    <>
      <p>Contents</p>
      <p>Contents</p>
      <p>Contents</p>
      <p>Contents</p>
    </>
  )
}

/* props */
export const UserProfileProps = { ...usersPropTypes.User }

UserProfile.propTypes = UserProfileProps
