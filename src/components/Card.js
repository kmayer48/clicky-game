import React from 'react';

const Card = props => (
    <div className="col-xs-12 col-md-2">
        <div className="card mb-5 mx-auto">
            <img className="card-img-top" src={props.src} alt={props.alt} onClick={props.handleClick} id={props.id}/>
        </div>
    </div>
)

export default Card;