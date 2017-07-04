import React, { Component } from 'react';
import PlayerList from './PlayerList';
import NewPlayer from './NewPlayer';

export default class App2 extends React.Component {    
    constructor(props, context) {        
        super(props, context)            /* The parameters are MANDATORY */
        this.state = {
                counter: this.props.players.length,
                players: this.props.players,
                loading: true
        }
    }
    
    componentDidMount() {
        this.loadPlayers();                    
    }

    handleOnAddPlayer(event) {        
        event.preventDefault();
        let player = {
            name: event.target.name.value,
            email: event.target.email.value,
        };
        event.target.name.value = "";
        event.target.email.value = "";

        fetch(this.props.baseUrl+'insertPlayer', {                
            method: 'post',
            body: JSON.stringify({
                player
            })
        }).then((data) => {
            this.loadPlayers();
        })        
    }

    loadPlayers(){
        fetch(this.props.baseUrl+'rest/getPlayers')
            .then( (response) => {
                return response.json() })   
                    .then( (data) => {
                        this.setState({
                            players: data,
                            counter: data.length,
                            loading: false
                        });
                    });
    }

    render() {
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to Symfony 3/Drupal 8 Isomorphic SPA With React</h2>
                    </div>
                    Total Players: {this.state.counter}
                    <p className="App-intro">
                        Player's List
                    </p>
                    <PlayerList players={this.state.players} baseUrl={this.props.baseUrl}/>
                    <NewPlayer onAddPlayer={this.handleOnAddPlayer.bind(this)} />
                </div>
            );
    }

}