import React from 'react'
import PropTypes from 'prop-types'

/**
 * MainLayout component
 */
export default function MainLayout({ children }) {
  return (
    <>
      <main style={{ minHeight: '100%', width: '100%' }}>{children}</main>
    </>
  )
}

/* props */
MainLayout.propTypes = {
  children: PropTypes.element
}
