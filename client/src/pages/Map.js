import React, { useState } from 'react';
import USAMap from 'react-usa-map';

// Functions and Data
import { findStateData, geographyPercent, fillColor, topCities, geographyStatus } from '../functions';
import { mockData } from '../data';

function Map() {

    const [stateStats, chooseStateStats] = useState('');
    const [stateStats2, chooseStateStats2] = useState('');

    const mapHandler = (event) => {
        // variable for which state is clicked
        let stateClick = event.target.dataset.name.toString();

        // gives back an array of objects for the state clicked
        let stateResultsAll = findStateData(stateClick, mockData);

        // == All FX below run stats using array of all state objects click
        // resultOne for the top map section, resultTwo for the bottom map section
        let resultOne = geographyStatus(stateResultsAll);
        let resultTwo = topCities(stateResultsAll);

        // All above relevant functions with results need to be grouped before state function
        chooseStateStats(resultOne);
        chooseStateStats2(resultTwo);
    };

    /// STATE COLOR
    const stateColors = (mockData) => {

        const colorResultAll = geographyPercent(mockData);
        
        return {
            "AL": {
                fill: fillColor("AL", colorResultAll)
              },
            "AK": {
                fill: fillColor("AK", colorResultAll)
              },
            "CA": {
                fill: fillColor("CA", colorResultAll)
              },
            // KEEP AS THE DARKEST ORANGE BELOW
            "NJ": {
                fill: "#FF6600"
            },
            // KEEP AS THE LGIHTEST ORANGE BELOW
            "PA": {
                fill: "#FFC299"
            },
            // KEEP AS THE REGULAR ORANGE BELOW
            "CT": {
                fill: "#FF944D"
            },
            "TX": {
                fill: fillColor("TX", colorResultAll)
            },
        }
    };

    return(
        <section class='map'>
            <section class='flex-container'>
                <section class='map-display'>
                    < USAMap onClick={mapHandler} customize={stateColors(mockData)} />
                </section>
                <section class='map-results'>
                    <div>
                        {stateStats ? (
                            <div>
                                <h1>State: {stateStats.state}</h1>
                                {(stateStats.length) !== 0 ? (
                                    <div>
                                        <p>Total N Recruitment: {stateStats.total}</p>
                                        <p>Rural N: {stateStats.rural}</p>
                                        <p>Urban N: {stateStats.urban}</p>
                                        <p>Urban Recruitment Percent: {stateStats.percent} %</p>
                                    </div>
                                ) : (
                                    <div>
                                        There are no N recruitment results
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                Choose a state to get started!
                            </div>
                        )}
                    </div>
                    <div>
                        {stateStats2.length !== 0 && (
                            <div>
                                <h2>Top {stateStats2.length} Recruitment Cities</h2>
                                <ol>
                                    {stateStats2.slice(0, 5).map((cityData, index) => (
                                        <li key={index}>
                                            City: {cityData[0]}, N: {cityData[1]}, Urban/Rural Status:
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                </section>
            </section>
            <section class='legend'>
                LEGEND BAR WITH KEY REGARDING COLOR PERCENT CLASSIFICATIONS HERE
            </section>
        </section>
    )
};

export default Map;