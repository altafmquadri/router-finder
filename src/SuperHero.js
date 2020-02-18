import React from 'react';
import './SuperHero.css'

const SuperHero = props => {
    const { name, src, age, facts } = props.hero
    return (
        <div className="container">
            <div className="SuperHero row">
                <div className="col-11 col-lg-5">
                    <div className="SuperHero-card card">
                        <img className="card-img-top" src={src} alt={name} />
                        <div className='card-body'>
                            <h2 className='card-title'>{name}</h2>
                            <h4 className='card-subtitle text-muted'>{age} years old</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {facts.map((f, i) => (
                                <li className='list-group-item' key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperHero