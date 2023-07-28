import React, { useState, useEffect } from 'react';
import USAMap from 'react-usa-map';

// Functions and Data
import { findData, urbanPercentColor, stateFillColor, topCities, urbanPercent } from '../functions';
import { mockData } from '../data';

function Map() {

    const [stateStats, chooseStateStats] = useState('');
    const [stateStats2, chooseStateStats2] = useState('');

    const mapHandler = (event) => {
        // variable for which state is clicked
        let stateClick = event.target.dataset.name.toString();
        // gives back an array of objects for the state clicked
        let results = findData(stateClick, mockData);
        // == All FX below run stats using array of all state objects click
        let resultOne = urbanPercent(results);
        let resultTwo = topCities(results);
        // All above relevant functions with results need to be grouped before state function
        chooseStateStats(resultOne);
        chooseStateStats2(resultTwo);
    };

    /// STATE COLOR
    const stateColors = (mockData) => {

        const colorResult = urbanPercentColor(mockData);
        
        return {
            "AL": {
                fill: stateFillColor("AL", colorResult)
              },
            "AK": {
                fill: stateFillColor("AK", colorResult)
              },
            "CA": {
                fill: stateFillColor("CA", colorResult)
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
        }
    };

    return(
        <section class='map'>
            <section class='flex-container'>
                <section class='map-display'>
                    < USAMap onClick={mapHandler} customize={stateColors(mockData)} />
                </section>
                <section class='map-results'>
                    {stateStats ? (
                        <div>
                            <h1>State: </h1>
                            <p>Total N Recruitment: </p>
                            <p>Rural N: {stateStats.rural}</p>
                            <p>Urban N: {stateStats.urban}</p>
                            <p>Urban Recruitment Percent: {stateStats.percent} %</p>
                            <h2>Top 5 Recruitment Cities</h2>
                            <ol>
                                <li>City: {stateStats2[0][0]}, N: {stateStats2[0][1]}, Urban/Rural Status: </li>
                                <li>City: {stateStats2[1][0]}, N: {stateStats2[1][1]}, Urban/Rural Status: </li>
                                <li>City: {stateStats2[2][0]}, N: {stateStats2[2][1]}, Urban/Rural Status: </li>
                                <li>City: {stateStats2[3][0]}, N: {stateStats2[3][1]}, Urban/Rural Status: </li>
                                <li>City: {stateStats2[4][0]}, N: {stateStats2[4][1]}, Urban/Rural Status: </li>
                            </ol>
                        </div>
                    ) : (
                        <div>
                            Chooose a state to get started!
                        </div>
                    )}
                </section>
            </section>
            <section>
                LEGEND BAR WITH KEY REGARDING COLOR PERCENT CLASSIFICATIONS HERE
            </section>
        </section>
    )
};

export default Map;