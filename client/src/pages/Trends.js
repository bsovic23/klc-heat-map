import React, { useState, useEffect } from 'react';

// Component imports


// Function imports
import { 
    fyStateChangeFx, 
    moduleTrendsFx 
} from '../functions/TrendsFx';

// Data imports
import { mockData } from '../data';

const Trends = () => {

    const [fyView, setFyView] = useState('All Time');
    const [filteredTrendData, setFilteredTrendData] = useState(mockData);

    const stateTrends = fyStateChangeFx(mockData);
    const moduleTrends = moduleTrendsFx(filteredTrendData, fyView);

    const { mostChangeUp, mostChangeDown } = stateTrends;
    const { mostEnrolled, mostCompleted } = moduleTrends;

    // Update on Click
    useEffect(() => {
        const filtered = filterModuleDataByYear(mockData, fyView);
        setFilteredTrendData(filtered);
    }, [fyView]);

    const filterModuleDataByYear = (mockData, fiscalYear) => {
        if (fiscalYear === 'All Time') {
            return mockData;
        } else {
            return mockData.filter((item) => item.year === fiscalYear);
        }
    };

    const selectFyTrendButton = (year) => {
        setFyView(year);
    }

    return(
        <section id='trends'>
            <h1>{fyView} Trends</h1>
            <div id="trends-buttons-div">
                <p>View Data by:</p>
                <button onClick={() => selectFyTrendButton('All Time')}>All Time</button>
                <button onClick={() => selectFyTrendButton('FY24')}>FY24</button>
                <button onClick={() => selectFyTrendButton('FY23')}>FY23</button>
            </div>
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
                <div class='trends-box'>
                    <h3>Top 10 {fyView} Courses Enrolled</h3>
                    {mostEnrolled.map(({ moduleName, enrolled }, index) => (
                    <p key={moduleName}>
                        {index + 1}. {moduleName}, Enrolled: {enrolled}
                    </p>
                    ))}
                </div>
                <div class='trends-box'>
                    <h3>Top 10 {fyView} Courses Completed</h3>
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

