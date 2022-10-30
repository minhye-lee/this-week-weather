import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_END_POINT
const LAT = '37.541'
const LON = '126.986'
const APP_ID = process.env.REACT_APP_APP_ID

/* 현재 & 미래 날씨 정보를 가져옵니다. (response : 현재 ~ 7일간의 미래 날씨) */
export const fetchCurrentandForcastsWeather = async () => {
  const res = await axios.get('', {
    params: { lat: LAT, lon: LON, exclude: 'current,hourly,minutely,alerts', appid: APP_ID, units: 'metric' },
  })
  return res.data
}

/* 과거 날씨 정보를 가져옵니다. (response: dt의 날씨 (한 요청당 하루의 과거 날씨))*/
export const fetchHistoricalWeather = async (dt: number) => {
  const res = await axios.get('/timemachine', {
    params: { lat: LAT, lon: LON, dt, appid: APP_ID, units: 'metric' },
  })
  return res.data
}
