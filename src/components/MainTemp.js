import React from 'react'
import './MainTemp.scss'


function MainTemp({ temp, icon, description }) {


  return (
    <div className='main_temp'>
      <div className="main_temp-icon">
        <i className={`wi ${icon} display-4`} />
        <small>{description}</small>
      </div>
      <div className="main_temp-temp">
        {Math.floor(temp - 273.15)}&deg; C
      </div>
    </div>
  )
}

export default MainTemp
