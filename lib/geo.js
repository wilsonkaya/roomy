const NodeGeocoder = require('node-geocoder')

const options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyDQnazgLzaphPAIVlN2geYFOH5Ri80Ycds', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
}

const geocoder = NodeGeocoder(options)

module.exports = geocoder
