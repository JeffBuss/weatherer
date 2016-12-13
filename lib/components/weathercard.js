import React from 'react'

const WeatherCard = (props) => {
  let { location, date, temp } = props;
  return (
    <div>
      <article className='weather-card'>
        { date }: { props.weatherType.type } (
        { Math.round(props.weatherType.chance * 100) + '% chance)' }<br/>
        <span>HIGH: { temp.high }</span><br />
        <span>LOW: { temp.low }</span>
      </article>
    </div>
  );
};

module.exports = WeatherCard;
