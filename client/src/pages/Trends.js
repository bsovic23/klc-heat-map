import React, { useState } from 'react';

// Component imports


// Function imports
import { fyStateChange } from '../functions/TrendsFx';

// Data imports
import { mockData } from '../data';

const Trends = () => {

    const stateTrends = fyStateChange(mockData);

    return(
        <section id='trends'>
            <h2>Trends</h2>
            <div>
                <div>
                    <h3>State Changes FY23 - FY24</h3>
                    <p>trends here</p>
                </div>
                <div>
                    <h3>Top 10 Courses Complete</h3>
                    <p></p>
                </div>
            </div>
        </section>
    )
};

export default Trends;

