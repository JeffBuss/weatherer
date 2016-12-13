import React from 'react'

const WeatherCard = (props) => {
  let { location, date, temp } = props;
  return (
    <div>
      <article className='weather-card'>
        {date}: { props.weatherType.type } (
        {Math.round(props.weatherType.chance * 100) + '% chance)'}
        <li>high: {temp.high}</li>
        <li>low: {temp.low}</li>
      </article>
    </div>
  );
};

module.exports = WeatherCard;
