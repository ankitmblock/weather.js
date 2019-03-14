const Apixu = require('./apixu')
const Weather = require('./weather.dto')

class Sample {
  constructor () {
    this.client = new Apixu()
  }

  async run () {
    console.log('Get Weather by City')
    const responseForCity = await this.client.getWeatherByCity('Indore')
    const weatherForCity = new Weather(responseForCity)
    console.log(weatherForCity.toString())

    console.log()

    console.log('Get Weather by Location')
    const responseForLocation = await this.client.getWeatherByLocation(34.0201613, -118.6919132)
    const weatherForLocation = new Weather(responseForLocation)
    console.log(weatherForLocation.toString())
  }
}

new Sample()
  .run()
  .catch(error => {
    console.log(`An Error Occured: ${error.message}`)
  })
