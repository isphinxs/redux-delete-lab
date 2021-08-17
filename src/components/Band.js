import React from 'react';

const Band = props => {
    // debugger;
    return (
        <li key={props.band.id}>
            <span>{props.band.name}</span>
            <button onClick={() => props.delete(props.band.id)}>Delete</button>
        </li>
    );
}

export default Band;