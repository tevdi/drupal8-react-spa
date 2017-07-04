import React from 'react'
import PlayerApp from '../PlayerApp'
import PlayersApp from '../PlayersApp'
import ExampleNavbar from '../ExampleNavbar'
require('../../../sass/layout.scss')
import {
      BrowserRouter as Router,
      Route,
      Link
} from 'react-router-dom'

export default (initialProps) => {
    console.log('Client rendering ...')
    return (
        <Router>  
          <div>
                <div>
                    <ExampleNavbar baseUrl={initialProps.baseUrl}/>
                </div>
                    <Route path={initialProps.baseUrl + 'player/:id'} exact render={(props) => <PlayerApp {...initialProps} {...props} />}/>
                    <Route path={initialProps.baseUrl} exact render={(props) => {
                        return ( <PlayersApp {...initialProps} {...props} />)
                    }}></Route>
            </div>    
        </Router>
    )
}
