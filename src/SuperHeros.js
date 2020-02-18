import React from 'react';
import './SuperHeros.css'

const SuperHeros = (props) => {

    const renderHeros = (props) => {
        return props.superHeros.map(s =>
            <div className='SuperHero col-lg-4 text-center' key={s.name} >
                <img src={s.src} alt={s.name} />
                <h3>{s.name}</h3>
            </div>)
    }
    return (
        <div className="SuperHeros">
            <h1 className="display-1 text-center">Super Heros!</h1>
            <div className='container'>
                <div className='row'>
                    {renderHeros(props)}
                </div>
            </div>
        </div>
    )
}

export default SuperHeros