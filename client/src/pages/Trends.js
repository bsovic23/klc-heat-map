import React, { useState } from 'react';

// Component imports


// Function imports
import { fyStateChangeFx, moduleTrendsFx } from '../functions/TrendsFx';

// Data imports
import { mockData } from '../data';

const Trends = () => {

    const stateTrends = fyStateChangeFx(mockData);
    const moduleTrends = moduleTrendsFx(mockData);

    const { mostEnrolled, mostCompleted } = moduleTrends;

    // console.log(moduleTrends);

    return(
        <section id='trends'>
            <h2>Trends</h2>
            <div>
                <div>
                    <h3>State Changes FY23 - FY24</h3>
                    <p>trends here</p>
                </div>
                <div>
                    <h3>Top 10 FY24 Courses Enrolled</h3>
                    {mostEnrolled.map(({ moduleName, enrolled }) => (
                    <p key={moduleName}>
                        Module: {moduleName}, Enrolled: {enrolled}
                    </p>
                    ))}
                </div>
                <div>
                    <h3>Top 10 FY24 Courses Completed</h3>
                    {mostCompleted.map(({ moduleName, completed }) => (
                    <p key={moduleName}>
                        Module: {moduleName}, Completed: {completed}
                    </p>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Trends;

