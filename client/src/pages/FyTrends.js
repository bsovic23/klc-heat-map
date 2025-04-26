import React, { useState, useEffect } from 'react';

// Component Imports



// Function Imports
import { 
    fyStateChangeFx, 
} from '../functions/TrendsFx';


// Data Imports
import { mockData } from '../data';


const FyTrends = () => {

    const stateTrends = fyStateChangeFx(mockData);

    const { mostChangeUp, mostChangeDown } = stateTrends;

    return(
        <section>
            <h1>State Changes</h1>
            <div class='trends-container'>
                <div class='trends-box'>
                    <h3>State Changes FY23 to FY24</h3>
                    <h3>Biggest Increase</h3>
                    {mostChangeUp.map(({state, fyChange}, index) => (
                        <p key={index}>
                            {index + 1}. {state}: {fyChange}
                        </p>
                    ))}
                    <h3>Biggest Decrease</h3>
                    {mostChangeDown.map(({state, fyChange}, index) => (
                        <p key={index}>
                            {index + 1}. {state}: {fyChange}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default FyTrends;

