import React, { useEffect, useState } from 'react'
import { Device } from 'twilio-client'

export default function Prototype() {
  const [ping, setPing] = useState({})
  const [token, setToken] = useState('')
  const [callStatus, setCallStatus] = useState('Unknown')

  function fetchPing() {
    fetch('/api/dialer/v1')
      .then((res) => res.json())
      .then((json) => void setPing(json))
      .catch((err) => {
        setPing(err)
      })
  }

  async function fetchToken() {
    fetch('/api/dialer/v1/auth/token')
      .then((res) => res.json())
      .then((json) => {
        const { token } = json
        setToken(token)
        Device.setup(token)
        Device.ready(function (device) {
          setCallStatus('Ready')
        })
      })
      .catch((err) => {
        setToken('')
        setCallStatus('Error: ', err)
      })
  }

  useEffect(() => {
    fetchPing()
    fetchToken()
  }, [])

  Device.connect(function (connection) {
    if ('phoneNumber' in connection.message) {
      setCallStatus('In call with ' + connection.message.phoneNumber)
    } else {
      // This is a call from a website user to a support agent
      setCallStatus('In call with support')
    }
    connection.accept()
  })

  Device.disconnect(function (_) {
    setCallStatus('Ready')
  })

  const tokenStyle = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 300,
    fontFamily: 'monospace'
  }

  return (
    <div style={{ padding: '0 2%' }}>
      <h1>Agents Client</h1>
      <h2>Server Response</h2>
      <small>
        <pre>
          <code>{JSON.stringify(ping, null, 2)}</code>
        </pre>
      </small>
      <h2>Token</h2>
      <p style={tokenStyle}>{token}</p>
      <h2>Device is Ready</h2>
      <p style={{ fontFamily: 'monospace' }}>{callStatus}</p>
      <h2>Actions</h2>
      <button onClick={() => void Device.connect()}>Make Call</button>
      <button onClick={() => void Device.disconnectAll()}>Disconnect Call</button>
    </div>
  )
}
