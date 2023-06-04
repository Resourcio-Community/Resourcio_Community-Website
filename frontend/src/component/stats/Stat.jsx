import React, { useState, useEffect } from 'react';
import './stat.css'
import NumberCounter from 'number-counter';

const Stat = ({ style, fontSize, cardTitle, cardText }) => {

    return (
        <div className="stats-card" style={{ "--color": `${style}` }}>
            <h3 className="card-title" >
                <NumberCounter end={cardTitle} start={0} delay={6} />  + 
            </h3>
            <p className="card-text"><span style={{ "fontSize": `${fontSize}px` }}>{cardText}</span></p>

        </div>
    )
}

export default Stat