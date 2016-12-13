import React from 'react';

export default class Controls extends React.Component {

  render() {
    return (
      <div className='user-input'>
        <input
          placeholder='location'
          title='location input'
          className='location-input'
          value = { this.props.location }
          onChange = { (e) => this.props.handleChange(e) }/>
        <input
          type = 'submit'
          className='submit-button'
          onClick = { () => this.props.handleClick() } />
      </div>
    );
  }
}
