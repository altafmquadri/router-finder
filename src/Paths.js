import React from 'react';
import SuperHeros from './SuperHeros'
import SuperHero from './SuperHero'
import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = props => {
    let superHeros = props.superHeros

    const getHero = props => {
        let name = props.match.params.name
        let hero = superHeros.find(s => s.name.toLowerCase() === name)
        return <SuperHero {...props} hero={hero} />
    }
    return (
        <Switch>
            <Route exact path='/superheros' render={(routerProps) =>
                <SuperHeros superHeros={props.superHeros}
                    {...routerProps} />}></Route>
            <Route exact path='/superheros/:name' render={getHero}></Route>
            <Redirect to="/superheros"/>
        </Switch>
    )
}

export default Routes