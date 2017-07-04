import React from 'react'
import { Link } from 'react-router-dom'

export default class NewPlayer extends React.Component{
  render(){
    return ( 
      <form onSubmit={this.props.onAddPlayer}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <input type="submit" value="Save" />
      </form>
    );
  }
}