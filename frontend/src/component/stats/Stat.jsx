import React, { useState, useEffect } from 'react';
import './stat.css'


const Stat = ({ style, fontSize, cardTitle, cardText }) => {
    const [count, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter <  cardTitle) {
                    return prevCounter + 1;
                } else {
                    clearInterval(interval); // Stop the interval when counter reaches 10
                    return prevCounter;
                }
            });
        }, 2000 / (cardTitle - 0));

        return () => {
            clearInterval(interval);
        };
    }, [cardTitle]); // Add [] as the dependency array to run the effect only once


    return (
        <div className="stats-card" style={{ "--color": `${style}` }}>
            {/* <h3 className="card-title" >{cardTitle}</h3> */}
            <h3 className="card-title" >{count} + </h3>
            <p className="card-text"><span style={{ "fontSize": `${fontSize}px` }}>{cardText}</span></p>

        </div>
    )
}

export default Stat