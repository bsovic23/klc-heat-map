import React from 'react';

// Function Imports
import { 
    fyStateChangeFx,
} from '../functions/FyTrendsFx';

// Data Imports
import { mockData } from '../data';

const FyTrends = () => {
    const stateTrends = fyStateChangeFx(mockData);

    // Helper function to render a trends box
    const renderTrendsBox = (title, trends) => (
        <div className="trends-box">
            <h3>{title}</h3>
            <h4>Biggest Increase</h4>
            {trends.mostChangeUp.map(({ state, count }, index) => (
                <p key={`up-${index}`}>
                    {index + 1}. {state}: {count}
                </p>
            ))}
            <h4>Biggest Decrease</h4>
            {trends.mostChangeDown.map(({ state, count }, index) => (
                <p key={`down-${index}`}>
                    {index + 1}. {state}: {count}
                </p>
            ))}
        </div>
    );

    return (
        <section>
            <h1>State Changes</h1>
            <div className="trends-container">
                {renderTrendsBox('All Time Change (FY23 to FY25', stateTrends.AllTime)}
                {renderTrendsBox('FY23 to FY24 Change', stateTrends.FY24)}
                {renderTrendsBox('FY24 to FY25 Change', stateTrends.FY25)}
            </div>
        </section>
    );
};

export default FyTrends;

