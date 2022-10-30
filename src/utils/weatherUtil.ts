import { fetchCurrentandForcastsWeather, fetchHistoricalWeather } from 'api'
import moment from 'moment'
import 'moment/locale/ko'

export const fetchThisWeekWeather = async () => {
  const day = getISODay()

  const historyDT = getCurrentWeekDt().slice(0, day)
  const forcastDT = getCurrentWeekDt().slice(day)

  const [forecastWeather, ...historyWeather] = await Promise.all([
    fetchCurrentandForcastsWeather(),
    ...historyDT.map(async (dt) => fetchHistoricalWeather(dt)),
  ])

  return [...formatHistoricalWeather(historyWeather), ...formatForcastWeather(forecastWeather, forcastDT)] as Weather[]
}

export const getISODay = () => {
  return (new Date().getDay() + 6) % 7
}

export const getCurrentWeekDt = () => {
  let days = []
  const currDate = moment()
  const weekStart = moment(currDate).startOf('isoWeek').hour(12)
  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').unix())
  }

  return days
}

export const formatForcastWeather = (dailyWeathers: any, forecastDT: number[]) => {
  const index = dailyWeathers.daily.findIndex((weather: any) => weather.dt === forecastDT[0])
  return dailyWeathers.daily.slice(index, index + forecastDT.length).map((weather: any) => ({
    date: moment(weather.dt * 1000).format('M/D(ddd)'),
    temp: weather.temp.day,
    weather: weather.weather[0].main,
    icon: weather.weather[0].icon,
  }))
}

export const formatHistoricalWeather = (weathers: any[]) => {
  return weathers.map((weather) => {
    const data = weather.data[0]
    return {
      date: moment(data.dt * 1000).format('M/D(ddd)'),
      temp: data.temp,
      weather: data.weather[0].main,
      icon: data.weather[0].icon,
    }
  })
}
