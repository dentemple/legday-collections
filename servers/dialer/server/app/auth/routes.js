const express = require('express')
const twilio = require('twilio')

const router = express.Router()

const { ClientCapability } = twilio.jwt


router.get('/', (req, res) => res.send({ ping: 'ok' }))

router.get('/token', (req, res) => {
  const capability = new ClientCapability({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN
  })

  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: process.env.TWILIO_TWIML_APP_SID
    })
  )

  capability.addScope(
    new ClientCapability.IncomingClientScope("agent")
  )

  const token = capability.toJwt()

  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(JSON.stringify({ token }))
})

module.exports = router