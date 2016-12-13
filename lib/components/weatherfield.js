import React from 'react';
import ReactDOM from 'react-dom';


// export default class WeatherField extends React.Component {
//   render() {
//     let { weather } = this.props.weather;
//     if(!weather){
//       return (
//         <div>dicks</div>
//       )
//     } else {
//       return (
//         <div>papayas</div>
//       )
//     }
//   }
// }

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
          <Weather {...card}/>
          <li>high: {card.temp.high}</li>
          <li>low: {card.temp.low}</li>
        </div>
        )}
      </div>
    )
  }
}

const Weather = (props) => {
  let {location, date, temp} = props
  return(
    <div>
      <article>
        {location} {date}
      </article>
    </div>
  )
}

module.exports = WeatherField;
