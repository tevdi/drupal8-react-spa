import React from 'react'
import PlayerApp from './PlayerApp';

export default class Player extends React.Component {
  render() {
    return (
      <div>
        {this.props.name} - {this.props.email}
      </div>
    );
  }
}

