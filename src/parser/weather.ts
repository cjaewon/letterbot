import * as core from '@actions/core';
import axios from 'axios';
import cheerio from 'cheerio';

import weatherData from './data/weather.json';

export const parse = async() => {
  const token = core.getInput('WEATHER_API_KEY');
  const city = 'Busan';

  const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`);
  const data = response.data;

  console.log('✅ 날씨 파싱 완료');

  return {
    weather: (<any> weatherData)[data.weather[0].id],
    temp: `(${data.main.temp_min}도 ~ ${data.main.temp_max}도)`
  };
};