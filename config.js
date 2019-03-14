const convict = require('convict')

module.exports = convict({
  'KEY': {
    doc: 'Key for Apixu',
    format: String,
    default: '',
    env: 'APIXU_KEY'
  }
})
