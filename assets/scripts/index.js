'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const rentalEvents = require('./rental/events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
$(() => {
  authEvents.addHandlers()
  rentalEvents.rentalHandlers()
})

// use require without a reference to ensure a file is bundled
require('./example')
