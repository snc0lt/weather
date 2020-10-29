import React from 'react'
import MainTemp from './MainTemp'

function Main({ weather, icon }) {

  return (
    <div className='main'>
      <MainTemp temp={weather.main.temp} icon={icon} iconId={weather.weather[0].id} description={weather.weather[0].description}/>
      <div className='main_location'>
        <i className="fas fa-map-marker-alt" style={{color: '#545454'}}></i>
        <h3 style={{color: '#545454'}}>{weather.name}</h3>
      </div>
    </div>
  )
}

export default Main
