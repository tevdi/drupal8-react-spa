import React from 'react'
import PlayerApp from '../PlayerApp'
import PlayersApp from '../PlayersApp'
import ExampleNavbar from '../ExampleNavbar'
import { StaticRouter, Route } from 'react-router'

export default (initialProps) => {
    const context = {}
    console.log('Server rendering ...')
    return (
          <StaticRouter location={initialProps.location} context={context} >
            <div>
                <div>
                    <ExampleNavbar baseUrl={initialProps.baseUrl}/>
                </div>
                    <Route path={initialProps.baseUrl + 'player/:id'} exact render={(props) => <PlayerApp {...initialProps} {...props} />}/>
                    <Route path={initialProps.baseUrl} exact render={(props) => {
                        return ( <PlayersApp {...initialProps} {...props} />)
                    }}></Route>
            </div>           
        </StaticRouter>
    )
}
