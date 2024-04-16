import React, { useState } from 'react';

// Component imports


// Function imports
import { fyStateChangeFx, moduleTrendsFx } from '../functions/TrendsFx';

// Data imports
import { mockData } from '../data';

const Trends = () => {

    const stateTrends = fyStateChangeFx(mockData);
    const moduleTrends = moduleTrendsFx(mockData);

    const { mostChangeUp, mostChangeDown } = stateTrends;
    const { mostEnrolled, mostCompleted } = moduleTrends;

    // state, fyChange

    return(
        <section id='trends'>
            <h2>Trends</h2>
            <div>
                <div>
                    <h3>State Changes FY23 - FY24</h3>
                    <p>Biggest Increase</p>
                    {mostChangeUp.map(({state, fyChange}, index) => (
                        <p key={index}>
                            {index + 1}. {state}: {fyChange}
                        </p>
                    ))}
                    <p>Biggest Decrease</p>
                    {mostChangeDown.map(({state, fyChange}, index) => (
                        <p key={index}>
                            {index + 1}. {state}: {fyChange}
                        </p>
                    ))}
                </div>
                <div>
                    <h3>Top 10 FY24 Courses Enrolled</h3>
                    {mostEnrolled.map(({ moduleName, enrolled }, index) => (
                    <p key={moduleName}>
                        {index + 1}. {moduleName}, Enrolled: {enrolled}
                    </p>
                    ))}
                </div>
                <div>
                    <h3>Top 10 FY24 Courses Completed</h3>
                    {mostCompleted.map(({ moduleName, completed }, index) => (
                    <p key={moduleName}>
                        {index + 1}. {moduleName}, Completed: {completed}
                    </p>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Trends;

