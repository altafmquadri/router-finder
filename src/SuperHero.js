import React from 'react';
import './SuperHero.css'
import { Link } from 'react-router-dom'

const SuperHero = props => {
    const { name, src, age, facts } = props.hero
    return (
            <div className="SuperHero row justify-content-center mt-5">
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
                        <div className='card-body'><Link className="btn btn-info" to='/superheros'>Go Back</Link></div>
                    </div>
                </div>
            </div>
    )
}

export default SuperHero