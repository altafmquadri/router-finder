import React from 'react';
import './SuperHeros.css'
import { Link } from 'react-router-dom'

const SuperHeros = (props) => {

    const renderHeros = (props) => {
        return props.superHeros.map(s =>
            <div className='SuperHero col-lg-4 text-center' key={s.name} >
                <img src={s.src} alt={s.name} />
                <h3> <Link className='underline' to={`/superheros/${s.name.toLowerCase()}`}>{s.name}</Link></h3>
            </div>)
    }
    return (
        <div className="SuperHeros">
            <h1 className="display-1 text-center my-5">Super Heros!</h1>
            <div className='row'>
                {renderHeros(props)}
            </div>
        </div>
    )
}

export default SuperHeros