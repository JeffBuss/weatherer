import React from 'react';
import ReactDOM from 'react-dom';
const $ = require('jquery');

export default class Controls extends React.Component {

  render() {
    return (
      <div>
        <input placeholder='location'
          value = {this.props.location}
          onChange = {(e) => this.props.handleChange(e)  }/>

        <input type = 'submit'
         onClick = { () => this.props.handleClick() } />
      </div>
    );
  }
}
