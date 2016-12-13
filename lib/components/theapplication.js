import React from 'react';
import Controls from './controls';
import WeatherField from './weatherfield';
const $ = require('jquery');

export default class TheApplication extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: null,
    };
  }

  componentDidMount() {
    this.setState({ location: localStorage.getItem('location' || '') }, () =>
    this.acceptLocation());
  }

  getLocation(e) {
    this.setState({ location: e.target.value.toLowerCase() });
  }

  acceptLocation() {
    $.get('https://weatherly-api.herokuapp.com/api/weather/' + this.state.location, (results) => {
      this.setState({ weather: results.slice(0, 7) },
      localStorage.setItem('location', this.state.location));
    });
  }

  render() {
    return (
      <div>
        <h1 className='logo'>The Weather Outside is Weather</h1>
        <Controls
          handleChange={ this.getLocation.bind(this) }
          handleClick={ this.acceptLocation.bind(this) }
        />
        <section>
          <h3 className='location'>{ this.state.location.toUpperCase() }</h3>
          <WeatherField weather={ this.state.weather }/>
        </section>
      </div>
    );
  }
}
