import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = (props) => {


    const renderLinks = (props) => {
        return props.superHeros.map(l => <NavLink
            to={`/${l.name.toLowerCase()}`}
            key={l.name}>{l.name}</NavLink>)
    }

    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                {renderLinks(props)}
            </nav>
        </div>
    )
}

export default Nav