import React, { useState, useEffect } from 'react';
import USAMap from 'react-usa-map';


// Functions and Data
import { findData, urbanPercent } from '../functions';
import { mockData } from '../data';

function Map() {

    const [stateStats, chooseStateStats] = useState('');

    const mapHandler = (event) => {
        let stateClick = event.target.dataset.name
        let stateClick2 = stateClick.toString();
        let results = findData(stateClick2, mockData);
        // individual state stats
        let resultOne = urbanPercent(results);

        // All above relevant functions with results need to be grouped before state function
        chooseStateStats(resultOne);
    };

    /// STATE COLOR
    const stateColors = () => {
        return {
            "NY": {
                fill: "#FF6600"
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
            <section class='map-display'>
                < USAMap onClick={mapHandler} customize={stateColors()} />
            </section>
            <section class='map-results'>
                {stateStats ? (
                    <div>
                        <h1>State: </h1>
                        <p>Rural N: {stateStats.rural}</p>
                        <p>Urban N: {stateStats.urban}</p>
                        <p>Population Percent: {stateStats.percent} %</p>
                        <h2>Top 5 Recruitment Cities</h2>
                        <ol>
                            <li>NAME, N, rural/urban status</li>
                            <li>NAME, N, rural/urban status</li>
                            <li>NAME, N, rural/urban status</li>
                            <li>NAME, N, rural/urban status</li>
                            <li>NAME, N, rural/urban status</li>
                        </ol>
                    </div>
                ) : (
                    <div>
                        Chooose a state to get started!
                    </div>
                )}
            </section>
        </section>
    )
};

export default Map;