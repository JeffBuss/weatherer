import React from 'react';
import WeatherCard from './weathercard'

const WeatherField = (props) => {
  let {weather} = props;
  if(!weather){
    return(
      <div>enter either 'denver' or 'castle-rock' or 'san-fransico' or 'san-diego' because  our api doesn't recognize any other cities as worthy of living in or reporting on. also we can't spell san-fransico but the weather there is perfect like 90% of the time anyway which is part of why the cost of living has always been super high there so fuck it ¯\_(ツ)_/¯</div>
    )
  } else {
    return(
      <div className="WeatherCard">
        { weather.map((card) => <div key={card.date}>
          <WeatherCard {...card}/>
        </div>
        )}
      </div>
    )
  }
}

module.exports = WeatherField;
