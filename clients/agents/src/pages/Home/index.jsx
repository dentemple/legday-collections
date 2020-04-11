import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <ul>
        <p>Home</p>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/keypad">Keypad</Link>
        </li>
        <li>
          <Link to="/prototype">Prototype</Link>
        </li>
      </ul>
    </>
  )
}

export default Home