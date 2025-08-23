import "./css/MComponent.css"
import React, { useState } from 'react';

function MComponent(props){
    return(
        <>
            <div className="card">
                <img className="img" src={props.image} alt={props.title} />
                <h5>{props.name}</h5>
                <h6>{props.title}</h6>
            </div>
        </>
    )
}

export default MComponent