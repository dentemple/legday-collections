const express = require('express')
const twilio = require('twilio')

const router = express.Router()
const { VoiceResponse } = twilio.twiml

router.get('/', (req, res) => res.send({ ping: 'ok' }))

router.post('/', twilio.webhook({ validate: false }), (req, res) => {
  console.log('POST REQUEST!')
  const voiceResponse = new VoiceResponse()

  voiceResponse.dial({
    callerId: process.env.TWILIO_NUMBER
  }, process.env.TEST_PHONE_NUMBER)


  res.type('text/xml')

  res.status(200).send(voiceResponse.toString())
})


module.exports = router