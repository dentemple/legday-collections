import { useEffect, useState } from 'react'

/**
 * App-level component
 */
export function LoadingRoute() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout = setTimeout(() => void setShow(true), 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <>{show && <p>LOADING</p>}</>
}

export default Loading
