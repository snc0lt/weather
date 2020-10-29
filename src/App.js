import React, { useEffect, useState } from 'react';
import { apiKey, url, latBogota, longBogota } from "./config";
import { get_WeatherIcon, weatherIcon } from "./util";
import Main from './components/Main';
import Forecast from './components/Forecast';
import MainPlaceToVisit from './components/MainPlaceToVisit';
import SecondaryPlaceToVisit from './components/SecondaryPlaceToVisit';
import FavCities from './components/FavCities';
import AddCity from './components/AddCity';


import './App.scss'
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [data, setData] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}weather?q=bogota&appid=${apiKey}`, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setData(JSON.parse(xhr.responseText));
          get_WeatherIcon(weatherIcon, JSON.parse(xhr.responseText).weather[0].id, setIcon)
        } else {
          console.error(xhr.statusText);
        }
      }
    }
    xhr.send(null);
  }, [])

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}onecall?lat=${latBogota}&lon=${longBogota}&exclude=hourly,minutely,alerts&units=metric&appid=${apiKey}`, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setForecast(JSON.parse(xhr.responseText));
        } else {
          console.error(xhr.statusText);
        }
      }
    }
    xhr.send(null);
  }, [])
  
  return (
    <div className="app">
      {data && forecast &&  (
        <div className="app_weather container">
          <div className="app_main">
            <Main weather={data} icon={icon}/>
          </div>
          <div className="app_secondary">
            <div className="app_secodanry_forecast">
              <Forecast forecast={forecast} getIcon={get_WeatherIcon}/>
            </div>
            <div className="app_secondary_place-to-visit">
              <div className='place-to-visit_main'>
                <MainPlaceToVisit />
              </div>
              <div className='place-to-visit_secondary'>
                <SecondaryPlaceToVisit />
              </div>
            </div>
            <div className="app_secondary_cities">
              <div className="app_sencodary_fav-cities">
                <FavCities get_WeatherIcon={get_WeatherIcon} weatherIcon={weatherIcon}/>
              </div>
              <div className="app_secondary_add-city">
                <AddCity />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
