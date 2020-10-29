import React from 'react'
import './Forecast.scss'
function Forecast({ forecast }) {
  const weather = forecast.daily.slice(1, 4)

  return (
    <>
      <h5 style={{ margin: '5px 0px 30px 15px', fontWeight: 'bold', color: '#545454' }}>3 day forecast</h5>
      { weather.map((d, i) => {
        const resDate = new Date(d.dt * 1000)
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = [ 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const day = days[resDate.getDay()]
        console.log(day)
        var month = months[resDate.getMonth()];
        var year = resDate.getFullYear();
        var date = resDate.getDate();
        return (
          <div className='forecast_card' key={i}>
            <div>
              <p style={{ fontWeight: '600', marginLeft: '20px' }}>{day}, {date} {month} {year}</p>
            </div>
            <div className='card_temp'>
              <p>{Math.floor(d.temp.min)}&deg;C / {Math.floor(d.temp.max)}&deg;C</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Forecast
