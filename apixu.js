const apixu = require('apixu')
const config = require('./config')

/**
 * Wrapper class for Apixu module
 * @class
 */
class Apixu {
  /**
   * Constructor for Apixu Class
   * @constructor
   */
  constructor (key) {
    const apixuConfig = {
      apikey: key || config.get('KEY')
    }
    this.apixu = new apixu.Apixu(apixuConfig)
  }

  /**
   * Returns weather against a city name
   * @function
   * @param {Object} query The query object consisting of city name
   */
  async getWeatherByCity (city) {
    return this._call(city)
  }

  /**
   * Returns weather against latitude and longitude
   * @function
   * @param {Object} query The query object consisting of latitude and longitude
   */
  async getWeatherByLocation (latitude, longitude) {
    return this._call(latitude + ',' + longitude)
  }

  /**
   * Gets called for every call to apixu module
   * @function
   * @param {String} query The query string for apixu module
   */
  async _call (query) {
    return this.apixu.current(query)
  }
}

module.exports = Apixu
