import React from 'react'

const WeatherCard = (props) => {
  let {location, date, temp} = props
  return(
    <div>
      <article>
        {location} {date}
        <li>high: {temp.high}</li>
        <li>low: {temp.low}</li>
      </article>
    </div>
  )
}

module.exports = WeatherCard;
