import React from 'react'
import { Link } from 'react-router-dom'
import Player from './Player';

export default class PlayerList extends React.Component {
  render () {
    return (      
        <div>
          {this.props.players.map((u, idx) => (
            <div key={idx}>
                <Link to={ this.props.baseUrl+"player/" + u.id}>
                    <Player
                id={u.id}
                name={u.name}
                email={u.email}
                baseUrl={this.props.baseUrl}
              />
                </Link>
            </div>
        ))}
          </div>
    );
  }
}
