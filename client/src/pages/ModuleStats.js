import React, { useState, useEffect } from 'react';

// Component imports


// Function imports
import { 
    moduleTrendsFx,
} from '../functions/ModuleStatsFx';

// Data imports
import { mockData } from '../data';

const ModuleStats = () => {

    const [fyView, setFyView] = useState('All Time');
    const [filteredTrendData, setFilteredTrendData] = useState(mockData);

    const moduleTrends = moduleTrendsFx(filteredTrendData, fyView);

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
    };

    return(
        <section id='trends'>
            <h1>{fyView} Trends</h1>
            <div id="trends-buttons-div">
                <p>View Data by:</p>
                <button onClick={() => selectFyTrendButton('All Time')}>All Time</button>
                <button onClick={() => selectFyTrendButton('FY25')}>FY25</button>
                <button onClick={() => selectFyTrendButton('FY24')}>FY24</button>
                <button onClick={() => selectFyTrendButton('FY23')}>FY23</button>
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
        </section>
    )
};

export default ModuleStats;

