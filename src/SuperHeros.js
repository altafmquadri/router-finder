import React from 'react';

const SuperHeros = (props) => {

    const renderHeros = (props) => {
        return props.superHeros.map(s => <div key={s.name} className='Hero'>
            <h1>{s.name}</h1>
        </div>)
    }
    return (
        <div className="SuperHeros">
            {renderHeros(props)}
        </div>
    )
}

export default SuperHeros