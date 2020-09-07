import React from 'react'
import PropTypes from 'prop-types'

/**
 * MainLayout component
 */
export default function MainLayout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

/* props */
MainLayout.propTypes = {
  children: PropTypes.elementType
}
