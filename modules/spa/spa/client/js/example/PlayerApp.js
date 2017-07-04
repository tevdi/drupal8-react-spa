import React, { Component } from 'react';
import PlayerList from './PlayerList';
import Player from './Player';
import NewPlayer from './NewPlayer';
import { Link } from 'react-router-dom'

export default class App1 extends React.Component {    
    constructor(props, context) {       
        super(props, context)           /* The parameters are MANDATORY */
        if ((!this.props.players[0]) || (this.props.players[0]['id'] != this.props['match']['params']['id'])   ) {     
                                        /* Component loaded in CLIENT SIDE by React-Router with no props.
                                           When this component is rendered in SERVER SIDE, this.props.player will be always
                                           the same value, so if we return to Home and click a Link the id will be the same
                                           BUT not the this.props['match']['params']['id']. That's why I do the 
                                           comparation.  */
            this.state = {
                player: [],
                loading: true,
            }
        } else {
            this.state = {              /* Component loaded in SERVER SIDE. */
                player: this.props.players[0],
                loading: false,
            }
        }
    }

    componentDidMount() {   
        console.log('Executed componentDidMount')    
        if (this.state.loading){        
            this.loadPlayer(this.props);  
        }      
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('Executed componentWillReceiveProps with future props: ', nextProps)
        this.loadPlayer(nextProps);  
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Executed shouldComponentUpdate with future props and state: ', nextProps, nextState)
        // IT MUST RETURN A BOOLEAN !!!!!!!
        return true
    }

    loadPlayer(prop){    
        fetch(this.props.baseUrl+'rest/getPlayers/'+prop['match']['params']['id'])
            .then( (response) => {
                return response.json()                 
            })   
            .then( (data) => {
                this.setState({
                    player: data[0],
                    loading: false
                });
            });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    Loading...
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Link to={this.props.baseUrl}>
                        Home
                    </Link>
                    <Player
                        id={this.state.player.id}
                        name={this.state.player.name}
                        email={this.state.player.email}
                    />
                </div>
            );
        }
    }
}