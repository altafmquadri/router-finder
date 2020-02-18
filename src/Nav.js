import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = (props) => {


    const renderLinks = (props) => {
        return props.superHeros.map(l => <NavLink className="navbar-brand"
            to={`/superheros/${l.name.toLowerCase()}`}
            key={l.name}>{l.name}</NavLink>)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to='/superheros'>SuperHeros</NavLink>
            {renderLinks(props)}
        </nav>
    )
}

export default Nav