class Weather {
  constructor (apixuResponseObj) {
    this.location = apixuResponseObj.location
    this.time = apixuResponseObj.current.last_updated_epoch
    this.temperature = apixuResponseObj.current.temp_f
    this.weather = apixuResponseObj.current.condition.text
    this.wind = apixuResponseObj.current.wind_mph
    this.windDirection = apixuResponseObj.current.wind_dir
  }

  set location (loc) {
    this.loc = `${loc.name}, ${loc.country}`
  }

  get location () {
    return this.loc
  }

  set time (time) {
    this.date = new Date(time)
  }

  get time () {
    return this.date
  }

  set temperature (fahrenheit) {
    this.temp = fahrenheit
  }

  get temperature () {
    return this.temp
  }

  set weather (condition) {
    this.weatherCondition = condition
  }

  get weather () {
    return this.weatherCondition
  }

  set wind (mph) {
    this.windMPH = mph
  }

  get wind () {
    return this.windMPH
  }

  set windDirection (dir) {
    this.direction = dir
  }

  get windDirection () {
    return this.direction
  }

  toString () {
    return `
      Location: ${this.location}
      Time: ${this.time}
      Temperature: ${this.temperature} F
      Weather: ${this.weather}
      Wind: ${this.wind} miles/hour ${this.windDirection}
    `
  }
}

module.exports = Weather
