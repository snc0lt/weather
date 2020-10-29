import React, { useState, useEffect } from 'react'
import { apiKey, url } from "../config";
import './FavCity.scss'

function FavCities({ get_WeatherIcon, weatherIcon }) {
  const [data, setData] = useState(null)
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `${url}weather?q=paris&appid=${apiKey}`, true);
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



  return (
    <>
      {data && (
        <>
          <div className='fav'>
            <div className='fav_city'>
              <div>
                <i className={icon ? `wi ${icon} display-4` : null} />
              </div>
              <div><p>{Math.floor(data.main.temp - 273.15)}&deg;C</p></div>
              <div><p style={{ fontWeight: '600' }}>{data.name}, {data.sys.country}</p></div>
            </div>
            <div className='fav_city_desc'>
              <div>
                <small>Humidity {data.main.humidity}%</small>
              </div>
              <div>
                <small>Wind Spedd {data.wind.speed}km/h</small>
              </div>
            </div>
          </div>
          <div className='fav'>
            <div className='fav_city'>
              <div><i className={`wi ${icon} display-4`} /></div>
              <div><p>{Math.floor(data.main.temp - 273.15)}&deg;C</p></div>
              <div><p style={{ fontWeight: '600' }}>{data.name}, {data.sys.country}</p></div>
            </div>
            <div className='fav_city_desc'>
              <div>
                <small>Humidity {data.main.humidity}%</small>
              </div>
              <div>
                <small>Wind Spedd {data.wind.speed}km/h</small>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default FavCities
